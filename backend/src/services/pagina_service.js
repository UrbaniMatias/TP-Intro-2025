import conn from "./db_connection.js";
import Pagina from "../models/pagina.js";
import Opcion from "../models/opcion.js";

async function getPaginaById(id) {
  try {
    const res = await conn.query("SELECT * FROM pagina WHERE id = $1", [id]);

    if (res.rowCount === 0) throw new Error("Pagina no encontrada");

    return new Pagina(
      res.rows[0].id,
      res.rows[0].id_aventura,
      res.rows[0].titulo,
      res.rows[0].contenido,
      res.rows[0].imagen,
      res.rows[0].imagen_de_fondo
    );
  } catch (error) {
    console.error("Error en getPaginaById:", error);
    throw error;
  }
}

async function createPagina(
  titulo,
  id_aventura,
  contenido,
  imagen,
  imagen_de_fondo
) {
  try {
    if (!id_aventura) throw new Error("El id de la aventura es invalido");

    if (titulo === "") throw new Error("El titulo debe ser un string no vacio");

    if (contenido === "")
      throw new Error("El contenido debe ser un string no vacio");

    if (imagen === "")
      throw new Error("Imagen inválida: debe ser string o null");

    if (imagen_de_fondo === "")
      throw new Error("Imagen_de_fondo inválida: debe ser string o null");

    const res = await conn.query(
      "INSERT INTO paginas (id_aventura, titulo, contenido, imagen, imagen_de_fondo) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id_aventura, titulo, contenido, imagen, imagen_de_fondo]
    );
    return new Pagina(
      res.rows[0].id,
      res.rows[0].titulo,
      res.rows[0].id_aventura,
      res.rows[0].contenido,
      res.rows[0].imagen,
      res.rows[0].imagen_de_fondo
    );
  } catch (error) {
    console.error("Error en createPagina:", error);
    throw error;
  }
}

async function validateIdPagina(id) {
  return (
    (await conn.query("SELECT 1 FROM pagina WHERE id = $1 LIMIT 1", [id]))
      .rowCount !== 0
  );
}

async function updatePaginaById(
  id,
  titulo = null,
  contenido = null,
  imagen = null,
  imagen_de_fondo = null
) {
  try {
    if (!id) throw new Error("ID de pagina requerido");

    if (validateIdPagina(id) == false) throw new Error("Pagina no encontrado");

    if (titulo)
      conn.query("UPDATE pagina SET titulo = $2 WHERE id = $1", [id, titulo]);

    if (contenido)
      conn.query("UPDATE pagina SET contenido = $2 WHERE id = $1", [
        id,
        contenido,
      ]);

    if (imagen)
      conn.query("UPDATE pagina SET imagen = $2 WHERE id = $1", [id, imagen]);

    if (imagen_de_fondo)
      conn.query("UPDATE pagina SET imagen_de_fondo = $2 WHERE id = $1", [
        id,
        imagen_de_fondo,
      ]);

    return getPaginaById(id);
  } catch (error) {
    console.error("Error en updatePaginaById:", error);
    throw error;
  }
}

async function deletePaginaById(id) {
  try {
    const res = await conn.query("DELETE FROM pagina WHERE id = $1", [id]);

    if (res.rowCount === 0) throw new Error("Página no encontrada");
  } catch (error) {
    console.error("Error en deletePaginaById:", error);
    throw error;
  }
}

async function getAllPaginasFinalesByUsuarioId(id_usuario) {
  try {
    const res = await conn.query(
      `
      SELECT p.* FROM pagina p
      JOIN finales f ON p.id = f.id_pagina
      JOIN usuario_final uf ON uf.id_final = f.id
      WHERE uf.id_usuario = $1
      `,
      [id_usuario]
    );

    return res.rows.map(
      async (row) =>
        new Pagina(
          row.id,
          row.id_aventura,
          row.titulo,
          row.contenido,
          row.imagen,
          row.imagen_de_fondo
        )
    );
  } catch (error) {
    console.error("Error en getAllPaginasFinalesByUsuarioId:", error);
    throw error;
  }
}

export default {
  getPaginaById,
  createPagina,
  updatePaginaById,
  deletePaginaById,
  getAllPaginasFinalesByUsuarioId,
};
