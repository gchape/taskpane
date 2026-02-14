CREATE TABLE company
(
    id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    street     VARCHAR(255),
    city       VARCHAR(100),
    state      VARCHAR(100),
    zip        VARCHAR(20),
    phone      VARCHAR(50)  NOT NULL,
    email      VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TYPE employee_role AS ENUM (
    'MANAGER',
    'EMPLOYEE'
    );

CREATE TABLE employee
(
    id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    company_id    BIGINT        NOT NULL REFERENCES company (id) ON DELETE CASCADE,
    created_at    TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    role          employee_role NOT NULL   DEFAULT 'EMPLOYEE',
    email         VARCHAR(255)  NOT NULL,
    first_name    VARCHAR(64)   NOT NULL,
    last_name     VARCHAR(64)   NOT NULL,
    password_hash VARCHAR(255)  NOT NULL
);

CREATE UNIQUE INDEX unique_employee_email_per_company
    ON employee (company_id, LOWER(email));

CREATE TABLE project
(
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    company_id  BIGINT       NOT NULL REFERENCES company (id) ON DELETE CASCADE,
    manager_id  BIGINT       REFERENCES employee (id) ON DELETE SET NULL,
    created_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    is_done     BOOLEAN      NOT NULL    DEFAULT FALSE,
    title       VARCHAR(255) NOT NULL,
    description TEXT
);

CREATE TYPE task_status AS ENUM (
    'TODO',
    'IN_PROGRESS',
    'DONE',
    'CANCELLED'
    );

CREATE TABLE task
(
    id          BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    project_id  BIGINT       NOT NULL REFERENCES project (id) ON DELETE CASCADE,
    assignee_id BIGINT       REFERENCES employee (id) ON DELETE SET NULL,
    created_at  TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    start_date  DATE         NOT NULL,
    due_date    DATE         NOT NULL,
    title       VARCHAR(255) NOT NULL,
    description TEXT,
    status      task_status  NOT NULL    DEFAULT 'TODO',

    CONSTRAINT check_start_date
        CHECK (start_date <= due_date)
);

CREATE OR REPLACE FUNCTION ensure_project_manager_role_and_company_match()
    RETURNS TRIGGER AS
$$
BEGIN
    IF NEW.manager_id IS NOT NULL THEN
        IF NOT EXISTS (SELECT 1
                       FROM employee e
                       WHERE e.id = NEW.manager_id
                         AND e.company_id = NEW.company_id
                         AND e.role = 'MANAGER') THEN
            RAISE EXCEPTION
                'Manager (%) must belong to the same company and have role MANAGER.',
                NEW.manager_id;
        END IF;
    END IF;

    RETURN NEW;
END;
$$
    LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION ensure_task_assignee_company_role_and_future_due_date()
    RETURNS TRIGGER AS
$$
DECLARE
    project_company_id BIGINT;
BEGIN
    SELECT p.company_id
    INTO project_company_id
    FROM project p
    WHERE p.id = NEW.project_id;

    IF project_company_id IS NULL THEN
        RAISE EXCEPTION
            'Project (%) does not exist.',
            NEW.project_id;
    END IF;

    IF NEW.assignee_id IS NOT NULL THEN
        IF NOT EXISTS (SELECT 1
                       FROM employee e
                       WHERE e.id = NEW.assignee_id
                         AND e.company_id = project_company_id
                         AND e.role = 'EMPLOYEE') THEN
            RAISE EXCEPTION
                'Assignee (%) must belong to the same company and have role EMPLOYEE.',
                NEW.assignee_id;
        END IF;
    END IF;

    IF NEW.due_date <= CURRENT_DATE THEN
        RAISE EXCEPTION
            'Task due_date (%) must be in the future.',
            NEW.due_date;
    END IF;

    RETURN NEW;
END;
$$
    LANGUAGE plpgsql;

CREATE TRIGGER trg_project_ensure_manager_role_and_company_match
    BEFORE INSERT OR UPDATE
    ON project
    FOR EACH ROW
EXECUTE FUNCTION ensure_project_manager_role_and_company_match();

CREATE TRIGGER trg_task_ensure_assignee_company_role_and_due_date
    BEFORE INSERT OR UPDATE
    ON task
    FOR EACH ROW
EXECUTE FUNCTION ensure_task_assignee_company_role_and_future_due_date();
