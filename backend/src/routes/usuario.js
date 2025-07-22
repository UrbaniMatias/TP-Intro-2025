import { Router } from "express";
import usuario_service from "../services/usuario_service.js";

const router = Router();

// POST /v1/usuario
router.post("/", async (req, res) => {
  try {
    res.send("Crear usuario");

    const nuevo_usuario = await usuario_service.createUsuario(
      req.body.nombre,
      req.body.contrasenia,
      req.body.email,
      req.body.fecha_de_nacimiento
    );

    res.send(nuevo_usuario);
  } catch (error) {
    console.error(error);
    res.status(501);
  }
});

// GET /v1/usuario/:id_usuario
router.get("/:id_usuario", async (req, res) => {
  res.send(`Obtener usuario ${req.params.id_usuario}`);
});

// GET /v1/usuario/:id_usuario/finales
router.get("/:id_usuario/finales", async (req, res) => {
  res.send(`Finales del usuario ${req.params.id_usuario}`);
});

// PUT /v1/usuario/:id_usuario
router.put("/:id_usuario", async (req, res) => {
  res.send(`Actualizar usuario ${req.params.id_usuario}`);
});

// PUT /v1/usuario/:id_usuario/finales
router.put("/:id_usuario/finales", async (req, res) => {
  res.send(`Actualizar finales del usuario ${req.params.id_usuario}`);
});

// DELETE /v1/usuario/:id_usuario
router.delete("/:id_usuario", async (req, res) => {
  res.send(`Eliminar usuario ${req.params.id_usuario}`);
});

export default router;
