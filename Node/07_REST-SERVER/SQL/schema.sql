DROP DATABASE IF EXISTS tienda;

CREATE DATABASE IF NOT EXISTS tienda;
USE tienda;

-- Tabla de roles (se debe crear antes porque `usuarios` depende de ella)
CREATE TABLE IF NOT EXISTS roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(20) BINARY NOT NULL
);

ALTER TABLE roles AUTO_INCREMENT = 1;

-- Insertar roles
INSERT INTO `roles` (`id`, `role`) VALUES ('1', 'ADMIN');
INSERT INTO `roles` (`id`, `role`) VALUES ('2', 'SELLER');
INSERT INTO `roles` (`id`, `role`) VALUES ('3', 'USER');

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    google BOOLEAN DEFAULT FALSE,
    role_id INT,  -- Se renombró 'id' a 'role_id' para evitar conflicto
    img VARCHAR(255),
    estado BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE SET NULL
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


-- Insertar usuario dummy

INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (1, 'Camel', 'cstepto0@ox.ac.uk', '2~d''@C1<,_', false, 3, 'https://robohash.org/voluptasvoluptatemaliquid.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (2, 'Avril', 'adunckley1@mediafire.com', '>*6cTF4Woqev', true, 1, 'https://robohash.org/atemporibusneque.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (3, 'Germana', 'ggarriock2@mit.edu', 'U+$D~?|48', true, 1, 'https://robohash.org/voluptasnumquamsed.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (4, 'Nowell', 'ngrinnell3@springer.com', '/XjVTF,F4C', false, 1, 'https://robohash.org/illoquibusdamvoluptates.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (5, 'Kellen', 'kbehninck4@census.gov', '{"~"D,FW', true, 2, 'https://robohash.org/inventoresedassumenda.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (6, 'Anna-diane', 'aquin5@narod.ru', ',ZD\fLs', true, 1, 'https://robohash.org/dignissimosnihilquo.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (7, 'Derick', 'dchaldecott6@ucoz.ru', '3sO5+``B', true, 2, 'https://robohash.org/nonaliquidesse.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (8, 'Justen', 'jwimsett7@seesaa.net', '?Td.AoGo', true, 1, 'https://robohash.org/laborequiasimilique.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (9, 'Iorgo', 'ijillett8@networksolutions.com', '%r5diO#0b"e}', false, 3, 'https://robohash.org/odioiustofugit.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (10, 'Roman', 'rburrel9@smugmug.com', 'M{2sh<U', false, 2, 'https://robohash.org/dolorfacilisquibusdam.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (11, 'Leonardo', 'ljadczaka@spotify.com', 'VGA9%,A=+', false, 2, 'https://robohash.org/numquamremquidem.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (12, 'Danice', 'dreddingsb@pinterest.com', 'E/(_}j@GmAn`', true, 1, 'https://robohash.org/laborenecessitatibusculpa.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (13, 'Isaak', 'ibabberc@last.fm', 'W,{6_AJb', true, 3, 'https://robohash.org/fugiatquibusdamnecessitatibus.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (14, 'Fredelia', 'fthorwarthd@merriam-webster.com', 'Zkwfez/DdXu', true, 3, 'https://robohash.org/etaliquidvoluptatem.jpg?size=50x50&set=set1', true);
INSERT INTO usuarios (id, nombre, email, password, google, role_id, img, estado) values (15, 'Beatriz', 'bridde@symantec.com', '.sE<,pa,f', true, 1, 'https://robohash.org/evenietfacerehic.jpg?size=50x50&set=set1', true);