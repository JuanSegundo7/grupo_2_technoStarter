DROP DATABASE IF EXISTS TechnoStarter;

CREATE DATABASE technostarter;
USE TechnoStarter;

CREATE TABLE categorias(
  id TINYINT(3) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(15) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(15) NOT NULL,
  apellido VARCHAR(30) NOT NULL,
  email VARCHAR(80) NOT NULL,
  clave VARCHAR(200) NOT NULL,
  ubicacion VARCHAR(80) NOT NULL,
  avatar VARCHAR(80) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE tipo_contribucion (
  id TINYINT(4) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(6) NOT NULL,
  monto FLOAT unsigned NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE proyectos (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(100) NOT NULL,
  contribucion_actual FLOAT unsigned NOT NULL DEFAULT 0,
  contribucion_final FLOAT unsigned NOT NULL,
  texto TEXT NOT NULL,
  fecha_inicial DATE NOT NULL,
  fecha_limite DATE NOT NULL,
  usuario_id INT NOT NULL,
  categoria_id TINYINT(3) NOT NULL,
  imagenes_id INT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (categoria_id) REFERENCES categorias (id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
  FOREIGN KEY (imagenes_id) REFERENCES imagenes (id)
);

CREATE TABLE imagenes (
  id INT NOT NULL AUTO_INCREMENT,
  url_imagen VARCHAR(255) NOT NULL,
  proyecto_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (proyecto_id) REFERENCES proyectos (id)
)

CREATE TABLE contribucion_usuarios (
  id INT NOT NULL AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  proyecto_id INT NOT NULL,
  contribucion_id TINYINT(4) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (usuario_id) REFERENCES usuarios (id),
  FOREIGN KEY (proyecto_id) REFERENCES proyectos (id),
  FOREIGN KEY (contribucion_id) REFERENCES tipo_contribucion (id)
);