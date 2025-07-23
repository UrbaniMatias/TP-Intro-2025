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

async function createOpcion(descripcion, id_pagina_origen, id_pagina_destino) {
  try {
    const res = await conn.query(
      "INSERT INTO opcion (descripcion, id_pagina_origen, id_pagina_destino) VALUES ($1, $2, $3)",
      [descripcion, id_pagina_origen, id_pagina_destino]
    );

    if (res.rowCount === 0) throw new Error("Opcion no encontrada");

    return new Opcion(
      res.rows[0].id,
      res.rows[0].descripcion,
      res.rows[0].id_pagina_origen,
      res.rows[0].id_pagina_destino
    );
  } catch (error) {
    console.error("Error en createOpcion:", error);
    throw error;
  }
}

async function deleteOpcionById(id) {
  try{
    const res = await conn.query("DELETE FROM opcion WHERE id = $1", [id]);

    if (res.rowCount === 0) throw new Error("Opcion no encontrada");

  } catch (error) {
    console.error("Error en deleteOpcionById:", error);
    throw error;
  }
}

async function validateIdOpcion(id) {
  return (await conn.query("SELECT 1 FROM opcion WHERE id = $1 LIMIT 1", [id])).rowCount !== 0;
}


async function updateOpcionById(
  id,
  descripcion = null,
  id_pagina_origen = null,
  id_pagina_destino = null
) {
    try {
    if (!id)
      throw new Error("ID de opcion requerido");
    
    if (validateIdOpcion(id) == false)
      throw new Error("ID de la opcion invalida");
   
    if (descripcion)
      conn.query("UPDATE opcion SET descripcion= $2 WHERE id = $1", [id, descripcion]);
 
    if (id_pagina_origen)
      conn.query("UPDATE opcion SET id_pagina_origen = $2 WHERE id = $1", [id, id_pagina_origen]);

    if (id_pagina_destino)
      conn.query("UPDATE opcion SET id_pagina_destino = $2 WHERE id = $1", [id, id_pagina_destino]);

    const result = await conn.query("SELECT * FROM opcion WHERE id = $1", [id]);
    return result.rows[0];
  } catch (error) {
    console.error("Error en updateOpcionById:", error);
    throw error;
  }
}


export default {
  getAllOpcionesByPaginaId,
  createOpcion,
  deleteOpcionById,
  updateOpcionById,
};
