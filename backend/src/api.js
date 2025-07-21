console.log("Cargando variables de entorno");
require("dotenv").config(); // carga las variables de entorno

const express = require("express");

console.log("Creando la app de express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routers
console.log("Cargando el router usuario");
const usuarioRouter = require("./routes/usuario");
app.use("/v1/usuario", usuarioRouter);

console.log("Cargando el router usuarios");
const usuariosRouter = require("./routes/usuarios");
app.use("/v1/usuarios", usuariosRouter);

console.log("Cargando el router aventura");
const aventuraRouter = require("./routes/aventura");
app.use("/v1/aventura", aventuraRouter);

console.log("Cargando el router aventuras");
const aventurasRouter = require("./routes/aventuras");
app.use("/v1/aventuras", aventurasRouter);

console.log("Iniciando el puerto");
app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
