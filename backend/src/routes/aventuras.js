const express = require("express");
const router = express.Router();
const aventura_service = require("../services/aventura_service");

// GET /v1/aventuras
router.get("/", async (req, res) => {
  try {
    console.log("Method: GET\nURI: /v1/aventuras");

    const aventuras = await aventura_service.getAllAventuras();
    const res_body = JSON.stringify(aventuras);
    console.log(`Response: ${res_body}`);
    res.send(res_body);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
