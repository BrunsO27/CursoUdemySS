CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    google BOOLEAN DEFAULT FALSE,
    role ENUM('admin', 'user') DEFAULT 'user',
    img VARCHAR(255),
    estado BOOLEAN DEFAULT TRUE
);

ALTER TABLE usuarios AUTO_INCREMENT = 1;

-- Tabla de Categorías
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    usuario_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
);

ALTER TABLE categorias AUTO_INCREMENT = 1;

-- Tabla de Productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precioUni DECIMAL(10, 2) NOT NULL,
    categoria_id INT,
    disponible BOOLEAN DEFAULT TRUE,
    usuario_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE SET NULL
);

ALTER TABLE productos AUTO_INCREMENT = 1;

CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO INCREMENT PRIMARY KEY,
    role VARCHAR(20) NOT NULL
);

ALTER TABLE roles AUTO_INCREMENT = 1;



