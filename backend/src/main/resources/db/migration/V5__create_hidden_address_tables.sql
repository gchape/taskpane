CREATE TABLE company_address
(
    company_id BIGINT PRIMARY KEY REFERENCES company (id),
    address_id BIGINT NOT NULL UNIQUE REFERENCES address (id)
);

CREATE TABLE employee_address
(
    employee_id BIGINT PRIMARY KEY REFERENCES employee (id),
    address_id  BIGINT NOT NULL UNIQUE REFERENCES address (id)
);