const conn = require("./db_connection");
const Pagina = require("../models/pagina");

async function getPaginaById(id) {
  try {
    const res = await conn.query("SELECT * FROM paginas WHERE id = $1", [id]);

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

async function createPagina(titulo, id_aventura, contenido, imagen, es_inicio) {
  try {
    if (titulo === "")
      throw new Error("El titulo debe ser un string no vacio");

    if (!id_aventura)
      throw new Error("El id de la aventura es invalido");
    
    if (contenido === "")
      throw new Error("El contenido debe ser un string no vacio");
    
    if (imagen === "")
      throw new Error("Imagen inválida: debe ser string o null");

    if (typeof es_inicio !== "boolean")
      throw new Error("es_inicio inválido: debe ser boolean");

    const res = await conn.query(
      "INSERT INTO paginas (id_aventura, title, contenido, imagen, es_inicio) VALUES ($1, $2, $3, $4, $5)",
      [id_aventura, title, contenido, imagen, es_inicio]
    );
  } catch (error) {
    console.error("Error en createPagina:", error);
    throw error;
  }
}

async function validateIdPagina(id) {
  return (await conn.query("SELECT 1 FROM pagina WHERE id = $1 LIMIT 1", [id])).rowCount !== 0;
}

async function updatePaginaById(id, titulo = null, contenido = null, imagen = null) {
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

  } catch (error) {
    console.error("Error en updatePaginaById:", error);
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

module.exports = { getPaginaById, createPagina, updatePaginaById, deletePaginaById };
