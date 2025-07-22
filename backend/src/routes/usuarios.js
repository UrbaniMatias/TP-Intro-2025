import { Router } from "express";
import usuario_service from "../services/usuario_service";

const router = Router();

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

export default router;
