CREATE DATABASE ecomData;
USE ecomData;
CREATE TABLE products (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    description text,
    category VARCHAR(255),
    price DECIMAL(10, 2),
    PRIMARY KEY (id)
);
