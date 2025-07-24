import conn from "./db_connection.js";
import Pagina from "../models/pagina.js";
import Opcion from "../models/opcion.js";

async function getPaginaById(id) {
  try {
    const res = await conn.query("SELECT * FROM pagina WHERE id = $1", [id]);

    if (res.rowCount === 0) throw new Error("Pagina no encontrada");

    return res.rows[0];
  } catch (error) {
    console.error("Error en getPaginaById:", error);
    throw error;
  }
}

async function getPaginaByNumero(id_aventura, numero) {
  try {
    const res = await conn.query( "SELECT * FROM pagina WHERE id_aventura = $1 AND numero = $2",[id_aventura, numero]);

    if (res.rowCount === 0) throw new Error("Página no encontrada");

    return res.rows[0];
  } catch (error) {
    throw new Error("Error en getPaginaByNumero", error);
  }
}


async function createPagina(titulo, id_aventura, contenido, imagen, imagen_de_fondo) {
  try {
    if (!id_aventura)
      throw new Error("El id de la aventura es invalido");

    if (titulo === "")
      throw new Error("El titulo debe ser un string no vacio");

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
  return (await conn.query("SELECT 1 FROM pagina WHERE id = $1 LIMIT 1", [id])).rowCount !== 0;
}

async function updatePaginaById(id, titulo = null, contenido = null, imagen = null, imagen_de_fondo = null) {
    try {
    if (!id)
      throw new Error("ID de pagina requerido");
    
    if (validateIdPagina(id) == false)
      throw new Error("Pagina no encontrado");

    if (titulo)
      conn.query("UPDATE pagina SET titulo = $2 WHERE id = $1", [id, titulo]);
   
    if (contenido)
      conn.query("UPDATE pagina SET contenido = $2 WHERE id = $1", [id, contenido]);
 
    if (imagen)
      conn.query("UPDATE pagina SET imagen = $2 WHERE id = $1", [id, imagen]);

    if (imagen_de_fondo)
      conn.query("UPDATE pagina SET imagen_de_fondo = $2 WHERE id = $1", [id, imagen_de_fondo]);

    return getPaginaById(id);
  } catch (error) {
    console.error("Error en updatePaginaById:", error);
    throw error;
  }
}

async function validatePaginaByNumero(id_aventura, numero) {
  return (await conn.query("SELECT 1 FROM pagina WHERE id_aventura = $1 AND numero = $2 LIMIT 1",[id_aventura, numero])).rowCount !== 0;
}



async function updatePaginaByNumero(id_aventura, numero, titulo = null, contenido = null, imagen = null, imagen_de_fondo = null) {
  try {
    if (!id_aventura || !numero)
      throw new Error("id_aventura y numero de página son requeridos");

    if (await validatePaginaByNumero(id_aventura, numero) === false)
      throw new Error("Página no encontrada");
    if (titulo)
      await conn.query("UPDATE pagina SET titulo = $3 WHERE id_aventura = $1 AND numero = $2", [id_aventura, numero, titulo]);

    if (contenido)
      await conn.query("UPDATE pagina SET contenido = $3 WHERE id_aventura = $1 AND numero = $2", [id_aventura, numero, contenido]);

    if (imagen)
      await conn.query("UPDATE pagina SET imagen = $3 WHERE id_aventura = $1 AND numero = $2", [id_aventura, numero, imagen]);

    if (imagen_de_fondo)
      await conn.query("UPDATE pagina SET imagen_de_fondo = $3 WHERE id_aventura = $1 AND numero = $2", [id_aventura, numero, imagen_de_fondo]);

    const res = await conn.query(
      "SELECT * FROM pagina WHERE id_aventura = $1 AND numero = $2",
      [id_aventura, numero]
    );

    return res.rows[0];
  } catch (error) {
    console.error("Error en updatePaginaByNumero:", error);
    throw error;
  }
}



async function deletePaginaById(id) {  
  try {
    const res = await conn.query("DELETE FROM pagina WHERE id = $1", [id]);

    if (res.rowCount === 0)
      throw new Error("Página no encontrada");

  } catch (error) {
    console.error("Error en deletePaginaById:", error);
    throw error;
  }
}
async function deletePaginaByNumero(id_aventura, numero) {
  try {
    if (!id_aventura || !numero)
      throw new Error("id_aventura y número de página son requeridos");

    const res = await conn.query(
      "DELETE FROM pagina WHERE id_aventura = $1 AND numero = $2 RETURNING *",
      [id_aventura, numero]
    );

    if (res.rowCount === 0)
      throw new Error("Página no encontrada");

    return res.rows[0]; 
  } catch (error) {
    console.error("Error en deletePaginaByNumero:", error);
    throw error;
  }
}


async function getAllPaginasFinalesByUsuarioId(id_usuario) {}

export default {
  getPaginaById,
  createPagina,
  updatePaginaById,
  updatePaginaByNumero,
  deletePaginaById,
  deletePaginaByNumero,
  getAllPaginasFinalesByUsuarioId,
  
 
};
