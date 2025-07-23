import { Router } from "express";
import aventura_service from "../services/aventura_service.js";
import pagina_service from "../services/pagina_service.js";

const router = Router();

// POST /v1/aventura
router.post("/", async (req, res) => {
  try {
    console.log("Method: POST\nURI: /v1/aventura");

    const { titulo, descripcion, autor_id, genero } = req.body;

    console.log(
      `
      titulo: ${titulo},
      descripcion: ${descripcion},
      autor_id: ${autor_id},
      genero: ${genero}
      `
    );

    const nueva_aventura = aventura_service.createAventura(
      titulo,
      descripcion,
      autor_id,
      genero
    );

    console.log(`Response: ${nueva_aventura}`);

    res.send(nueva_aventura);
  } catch (error) {
    res.status(500).send("Error al agregar una aventura");
  }
});

// POST /v1/aventura/:id_aventura/pagina
router.post("/:id_aventura/pagina", async (req, res) => {
  try {
    console.log("Method: POST\nURI: /v1/aventura/:id_aventura/pagina");

    const { id_aventura, titulo, contenido, imagen, imagen_de_fondo } =
      req.body;

    console.log(
      `
        id_aventura: ${id_aventura},
        titulo: ${titulo},
        contenido: ${contenido},
        imagen: ${imagen},
        imagen_de_fondo: ${imagen_de_fondo}
        `
    );

    const nueva_pagina = pagina_service.createPagina(
      titulo,
      id_aventura,
      contenido,
      imagen,
      imagen_de_fondo
    );

    console.log(`Response: ${nueva_pagina}`);
    res.send(nueva_pagina);
  } catch (error) {
    res.status(501).send("Error al crear la pagina");
  }
});

// POST /v1/aventura/:id_aventura/:id_pagina/opcion
router.post("/:id_aventura/:id_pagina/opcion", async (req, res) => {
  try {
    console.log(
      "Method: POST\nURI: /v1/aventura/:id_aventura/:id_pagina/opcion"
    );

    const id_aventura = req.params.id_aventura;
    console.log(`id_aventura: ${id_aventura}`);

    const id_pagina = req.params.id_pagina;
    console.log(`id_pagina: ${id_pagina}`);

    const { descripcion, id_pagina_origen, id_pagina_destino } = req.body;
    console.log(
      `
      descripcion: ${descripcion},
      id_pagina_origen: ${id_pagina_origen},
      id_pagina_destino: ${id_pagina_destino}
      `
    );

    const nueva_opcion = opcion_service.createOpcion(
      descripcion,
      id_pagina_origen,
      id_pagina_destino
    );
    console.log(`Response: ${nueva_opcion}`);

    res.send(nueva_opcion);
  } catch (error) {
    res.status(501).send("Error al crear la opcion");
  }
});

// GET /v1/aventura/:id_aventura
router.get("/:id_aventura", async (req, res) => {
  try {
    const id_aventura = req.params.id_aventura;
    console.log(`Method: GET\nURI: /v1/aventura/${id_aventura}`);

    const aventura = aventura_service.getAventuraById(id_aventura);
    const res_body = JSON.stringify(aventura);
    console.log(`Response: ${res_body}`);
    res.send(res_body);
  } catch (error) {
    res.status(500).send("Error al obtener la aventura");
  }
});

// GET /v1/aventura/:id_aventura/:id_pagina
router.get("/:id_aventura/:id_pagina", async (req, res) => {
  res.send(
    `Obtener página ${req.params.id_pagina} de aventura ${req.params.id_aventura}`
  );
});

// GET /v1/aventura/:id_aventura/:id_pagina/opciones
router.get("/:id_aventura/:id_pagina/opciones", async (req, res) => {
  res.send(
    `Obtener opciones de la página ${req.params.id_pagina} en aventura ${req.params.id_aventura}`
  );
});

// PUT /v1/aventura/:id_aventura
router.put("/:id_aventura", async (req, res) => {
  res.send(`Actualizar aventura ${req.params.id_aventura}`);
});

// PUT /v1/aventura/:id_aventura/pagina
router.put("/:id_aventura/pagina", async (req, res) => {
  res.send(`Actualizar página en aventura ${req.params.id_aventura}`);
});

// PUT /v1/aventura/:id_aventura/:id_pagina/opcion
router.put("/:id_aventura/:id_pagina/opcion", async (req, res) => {
  res.send(
    `Actualizar opción en página ${req.params.id_pagina} de aventura ${req.params.id_aventura}`
  );
});

// DELETE /v1/aventura/:id_aventura
router.delete("/:id_aventura", async (req, res) => {
  res.send(`Eliminar aventura ${req.params.id_aventura}`);
});

// DELETE /v1/aventura/:id_aventura/:id_pagina
router.delete("/:id_aventura/:id_pagina", async (req, res) => {
  res.send(
    `Eliminar página ${req.params.id_pagina} de aventura ${req.params.id_aventura}`
  );
});

// DELETE /v1/aventura/:id_aventura/:id_pagina/:id_opcion
router.delete("/:id_aventura/:id_pagina/:id_opcion", async (req, res) => {
  res.send(
    `Eliminar opción ${req.params.id_opcion} de página ${req.params.id_pagina} en aventura ${req.params.id_aventura}`
  );
});

export default router;
