import { query } from "./db_connection";
import Pagina from "../models/pagina";
import Opcion from "../models/opcion";

async function getPaginaById(id) {
  try {
    const res = await query("SELECT * FROM paginas WHERE id = $1", [id]);

    if (res.rowCount === 0) throw new Error("Pagina no encontrada");

    return new Pagina(
      res.rows[0].id,
      res.rows[0].id_aventura,
      res.rows[0].title,
      res.rows[0].contenido,
      res.rows[0].imagen
    );
  } catch (error) {
    console.error("Error en getPaginaById:", error);
    throw error;
  }
}

async function getAllOpcionesByPaginaId(id) {
  try {
    const res = await query(
      "SELECT * FROM opcion WHERE id_pagina_origen = $1",
      [id]
    );

    if (res.rowCount === 0)
      throw new Error("Fallo al optener las opciones de la pagina");

    return res.rows.map((row) =>
      Opcion(
        row.id,
        row.descripcion,
        row.id_pagina_origen,
        row.id_pagina_destino
      )
    );
  } catch (error) {
    console.error("Error en getAllOpcionesByPaginaId", error);
    throw error;
  }
}

async function createPagina(title, id_aventura, title, contenido, imagen) {
  try {
    if (!id_aventura) throw new Error("El id de la aventura es invalido");

    if (title === "") throw new Error("El titulo debe ser un string no vacio");

    if (contenido === "")
      throw new Error("El contenido debe ser un string no vacio");

    const res = await query(
      "INSERT INTO paginas (id_aventura, title, contenido, imagen) VALUES ($1, $2, $3, $4)",
      [id_aventura, title, contenido, imagen]
    );
  } catch (error) {
    console.error("Error en createPagina:", error);
    throw error;
  }
}

async function updatePaginaById(
  id,
  titulo = null,
  contenido = null,
  imagen = null
) {}

async function deletePaginaById(id) {}

export default {
  getPaginaById,
  createPagina,
  updatePaginaById,
  deletePaginaById,
};
