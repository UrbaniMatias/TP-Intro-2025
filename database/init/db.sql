
-- entidad 1
CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    contrasenia VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_de_nacimiento DATE NOT NULL
);

-- entidad 2
CREATE TABLE aventura (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(50) NOT NULL,
    descripcion VARCHAR(200) NULL,
    autor_id INT NOT NULL REFERENCES usuario(id),
    genero VARCHAR(30) NOT NULL,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    portada VARCHAR(255) NULL,
    id_pagina_inicial INT NOT NULL REFERENCES pagina(id)
);

-- entidad 3
CREATE TABLE pagina (
    id SERIAL PRIMARY KEY,
    id_aventura INT NOT NULL REFERENCES aventura(id),
    titulo VARCHAR(100) NOT NULL,
    contenido VARCHAR(255) NOT NULL,
    imagen VARCHAR(255) NULL,
    imagen_de_fondo VARCHAR(255) NULL
);

-- relacion entre paginas
CREATE TABLE opcion (
    id SERIAL PRIMARY KEY,
    descripcion VARCHAR(200) NOT NULL,
    id_pagina_origen INT NOT NULL REFERENCES pagina(id),
    id_pagina_destino INT REFERENCES pagina(id)
);

-- relacion entre aventura y pagina
-- paginas finales de una aventura
CREATE TABLE finales (
    id SERIAL PRIMARY KEY,
    id_pagina INT NOT NULL REFERENCES pagina(id) UNIQUE
);

-- relacion entre usuario y finales
CREATE TABLE usuario_final (
    id SERIAL PRIMARY KEY,
    id_usuario INT NOT NULL REFERENCES usuario(id),
    id_final INT NOT NULL REFERENCES finales(id)
);
