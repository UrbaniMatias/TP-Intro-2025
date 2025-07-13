const express = require("express");
const router = express.Router();

// GET /v1/usuarios
router.get("/", (req, res) => {
  res.send("Listar todos los usuarios");
});

module.exports = router;
