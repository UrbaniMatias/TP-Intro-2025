const express = require("express");
const router = express.Router();

// GET /v1/aventuras
router.get("/", (req, res) => {
  res.send("Listar todas las aventuras");
});

module.exports = router;
