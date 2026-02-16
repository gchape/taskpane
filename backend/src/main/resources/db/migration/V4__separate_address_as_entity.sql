alter table company
    drop column street;

alter table company
    drop column city;

alter table company
    drop column state;

alter table company
    drop column zip;

CREATE TABLE address
(
    id     BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    city   VARCHAR(100) NOT NULL,
    state  VARCHAR(100) NOT NULL,
    zip    VARCHAR(20)  NOT NULL
);
