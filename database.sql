CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255), description1 VARCHAR(255),
);



CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	description VARCHAR ( 255 )  NOT NULL,
	description1 VARCHAR ( 255 ) NOT NULL,
	description2 VARCHAR ( 255 ) UNIQUE NOT NULL,
    description3 VARCHAR ( 255 ) NOT NULL,
    description4 VARCHAR ( 255 ) NOT NULL,
    description5 VARCHAR ( 255 ) UNIQUE NOT NULL,
    description6 VARCHAR ( 255 ) UNIQUE NOT NULL
	
);

ALTER TABLE accounts ALTER COLUMN description DROP NOT NULL;
ALTER TABLE accounts ALTER COLUMN description3 DROP NOT NULL;
ALTER TABLE accounts ALTER COLUMN description4 DROP NOT NULL;
ALTER TABLE accounts ALTER COLUMN description5 DROP NOT NULL;
ALTER TABLE accounts ALTER COLUMN description6 DROP NOT NULL;


TRUNCATE accounts RESTART IDENTITY;

ALTER TABLE accounts RENAME image TO images;

ALTER TABLE accounts ADD COLUMN images VARCHAR(255);

UPDATE accounts SET image = img WHERE user_id = 1;

units VARCHAR(255),
gasalert VARCHAR(255),
tamper VARCHAR(255),
battery VARCHAR(255),
latitude VARCHAR(255),
longitude VARCHAR(255)