import express, { json } from "express";

console.log("Cargando variables de entorno");
require("dotenv").config(); // carga las variables de entorno

console.log("Creando la app de express");
const app = express();
const port = process.env.PORT || 3000;

app.use(json());

// Routers
console.log("Cargando el router usuario");
import usuarioRouter from "./routes/usuario";
app.use("/v1/usuario", usuarioRouter);

console.log("Cargando el router usuarios");
import usuariosRouter from "./routes/usuarios";
app.use("/v1/usuarios", usuariosRouter);

console.log("Cargando el router aventura");
import aventuraRouter from "./routes/aventura";
app.use("/v1/aventura", aventuraRouter);

console.log("Cargando el router aventuras");
import aventurasRouter from "./routes/aventuras";
app.use("/v1/aventuras", aventurasRouter);

console.log("Iniciando el puerto");
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
