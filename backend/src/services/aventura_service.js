const conn = require("./db_connection");
const Aventura = require("../models/aventura");

// devuelve todas las aventuras
async function getAventuras() {
  let aventuras = [];
  let res;

  try {
    res = await conn.query("SELECT * FROM aventuras");
  } catch (error) {
    console.error(error);
    throw new Error("Fallo al consultar la base de datos");
  }

  res.rows.forEach((row) => {
    aventuras += new Aventura(row.id, row.title, row.descripcion);
  });

  return aventuras;
}

// devuelve la aventura si la encuentra
// o lanza una excepcion en caso de error
async function getAventuraById(id) {}

// devuelve la aventura si la encuentra
// o lanza una excepcion en caso de error
async function getAventuraByTitle(title) {}

// devuelve la aventura creada
// o lanza una excepcion en caso de error
async function createAventura(titulo, descripcion) {}

module.exports = { getAventuras, getAventuraById, getAventuraByTitle };
