CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE Items {
	id INT(10) AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL,
	department VARCHAR(255) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock SMALLINT NOT NULL,
	PRIMARY KEY(id)
};

INSERT INTO Items (name, department, price, stock)

VALUES ('msi laptop', 'PC', 1000.99, 10);
VALUES ('iphone 6', 'cell phone', 299.99, 100);
VALUES ('skull headphones', 'accessories', 19.99, 100);
VALUES ('surface', 'PC', 499.99, 100);
