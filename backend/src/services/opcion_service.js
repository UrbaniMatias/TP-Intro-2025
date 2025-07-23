import conn from "./db_connection";
import Opcion from "../models/opcion";

async function getAllOpcionesByPaginaId(id) {
  try {
    const res = await conn.query(
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

async function createOpcion(descripcion, id_pagina_origen, id_pagina_destino) {}

async function deleteOpcionById(id) {}

async function updateOpcionById(
  id,
  descripcion = null,
  id_pagina_origen = null,
  id_pagina_destino = null
) {}

export default {
  getAllOpcionesByPaginaId,
  createOpcion,
  deleteOpcionById,
  updateOpcionById,
};
