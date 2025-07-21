const router = express.Router();
const usuario_service = require("../services/usuario_service");

// GET /v1/usuarios
router.get("/", async (req, res) => {
  try {
    console.log("Method: GET\nURI: /v1/usuarios");

    const usuarios = await aventura_service.getAllUsuarios();
    const res_body = JSON.stringify(usuarios);
    console.log(`Response: ${res_body}`);
    res.send(res_body);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = router;
