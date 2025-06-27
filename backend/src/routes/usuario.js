const express = require("express");
const router = express.Router();

// POST /v1/usuario
router.post("/", (req, res) => {
  res.send("Crear usuario");
});

// GET /v1/usuario/:id_usuario
router.get("/:id_usuario", (req, res) => {
  res.send(`Obtener usuario ${req.params.id_usuario}`);
});

// GET /v1/usuario/:id_usuario/finales
router.get("/:id_usuario/finales", (req, res) => {
  res.send(`Finales del usuario ${req.params.id_usuario}`);
});

// PUT /v1/usuario/:id_usuario
router.put("/:id_usuario", (req, res) => {
  res.send(`Actualizar usuario ${req.params.id_usuario}`);
});

// PUT /v1/usuario/:id_usuario/finales
router.put("/:id_usuario/finales", (req, res) => {
  res.send(`Actualizar finales del usuario ${req.params.id_usuario}`);
});

// DELETE /v1/usuario/:id_usuario
router.delete("/:id_usuario", (req, res) => {
  res.send(`Eliminar usuario ${req.params.id_usuario}`);
});

module.exports = router;
