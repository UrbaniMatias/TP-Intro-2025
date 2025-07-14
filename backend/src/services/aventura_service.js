const conn = require("./db_connection");
const Aventura = require("../models/aventura");

async function getAllAventuras() {
  const res = await conn.query("SELECT * FROM aventuras");

  return res.rows.map(
    (row) => new Aventura(row.id, row.title, row.descripcion)
  );
}

async function getAventuraById(id) {
  try {
    const res = await conn.query(
      "SELECT * FROM aventuras WHERE id = $1",
      [id]
    );

    if (res.rowCount === 0) throw new Error("Aventura no encontrada");

    return new Aventura(
      res.rows[0].id,
      res.rows[0].title,
      res.rows[0].descripcion
    );
  } catch (error) {
    console.error("Error en getAventuraById:", error);
    throw error;
  }
}

// devuelve las aventuras que tengan titulo similar al ingresado
// (busca coincidencias parciales del titulo)
// o lanza una excepcion en caso de error
async function getAventurasByTitle(title) {
  try {
    const res = await conn.query(
      // ILIKE matchea coincidencias parciales
      "SELECT * FROM aventuras WHERE title ILIKE $1",
      [`%${title}%`]
    );

    return res.rows.map(
      (row) => new Aventura(row.id, row.title, row.descripcion)
    );
  } catch (err) {
    console.error("Error en getAventuraById:", err);
    throw err;
  }
}

module.exports = { getAllAventuras, getAventuraById, getAventurasByTitle };
