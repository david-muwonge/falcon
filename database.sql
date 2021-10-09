--CREATE DATABASE perntodo;


--ALTER TABLE accounts ALTER COLUMN description5 DROP NOT NULL;
--ALTER TABLE accounts ALTER COLUMN description6 DROP NOT NULL;


--TRUNCATE accounts RESTART IDENTITY;

--ALTER TABLE accounts RENAME image TO images;

--ALTER TABLE accounts ADD COLUMN images VARCHAR(255);

--UPDATE accounts SET image = img WHERE user_id = 1;

--units VARCHAR(255),
--gasalert VARCHAR(255),
--tamper VARCHAR(255),
--battery VARCHAR(255),
--latitude VARCHAR(255),
--\c longitude VARCHAR(255)

CREATE TABLE accounts (
user_id serial PRIMARY KEY,
firstname VARCHAR(255),
lastname VARCHAR(255),
mobile VARCHAR(255),
location_detail VARCHAR(255),
district VARCHAR(255),
serial VARCHAR(255),
nin VARCHAR(255),
account_num VARCHAR(255),
token VARCHAR(255),
units VARCHAR(255),
gasalert VARCHAR(255),
tamper VARCHAR(255),
battery VARCHAR(255),
latitude VARCHAR(255),
longitude VARCHAR(255)
	
);