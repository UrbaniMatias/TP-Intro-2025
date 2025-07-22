import { Router } from "express";
import aventura_service from "../services/aventura_service.js";

const router = Router();

// POST /v1/aventura
router.post("/", async (req, res) => {
  console.log("POST /v1/aventura");

  const aventuras = aventura_service.getAllAventuras();
  console.log(aventuras);

  res.send(aventuras);
  try {
    const aventura_id = aventura_service.createAventura(
      req.params.titulo,
      req.params.descripcion,
      req.params.autor_id,
      req.params.genero
    );

    console.log("/v1/aventura");
    console.log("response: " + aventura_id);

    console.log(
      `aventura creada: ${JSON.stringify(
        aventura_service.getAventuraById(aventura_id)
      )}`
    );

    res.send(aventura_id);
  } catch (error) {
    res.status(500).send("Error al agregar una aventura");
  }
});

// POST /v1/aventura/:id_aventura/pagina
router.post("/:id_aventura/pagina", async (req, res) => {
  res.send(`Crear página en aventura ${req.params.id_aventura}`);
});

// POST /v1/aventura/:id_aventura/:id_pagina/opcion
router.post("/:id_aventura/:id_pagina/opcion", async (req, res) => {
  res.send(
    `Crear opción en página ${req.params.id_pagina} de aventura ${req.params.id_aventura}`
  );
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
