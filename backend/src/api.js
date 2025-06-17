const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Routers
const usuarioRouter = require("./routes/usuario");
const usuariosRouter = require("./routes/usuarios");
const aventuraRouter = require("./routes/aventura");
const aventurasRouter = require("./routes/aventuras");

app.use("/v1/usuario", usuarioRouter);
app.use("/v1/usuarios", usuariosRouter);
app.use("/v1/aventura", aventuraRouter);
app.use("/v1/aventuras", aventurasRouter);

app.listen(port, () => {
  console.log(`API escuchando en el puerto ${port}`);
});
