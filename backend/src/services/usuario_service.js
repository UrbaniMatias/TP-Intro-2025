const conn = require("../services/db_connection");
const Usuario = require("../models/usuario");

async function getAllUsuarios() {
  const res = await query("SELECT * FROM usuarios");
  return res.rows.map((row) => new Usuario(row.id, row.nombre));
}

async function getUsuarioById(id) {
  try {
    const res = await query("SELECT * FROM usuarios WHERE id = $1", [id]);

    if (res.rowCount === 0) throw new Error("Usuario no encontrada");

    return new Usuario(res.rows[0].id, res.rows[0].nombre);
  } catch (error) {
    console.error("Error en getUsuarioById:", error);
    throw error;
  }
}

async function createUsuario(nombre, contrasenia) {
  try {
    if (!nombre || nombre == "")
      throw new Error("El nombre debe ser un string no vacio");

    if (!contrasenia || contrasenia == "")
      throw new Error("La contrasenia debe ser un string no vacio");

    const res = await query(
      "INSERT INTO usuario (nombre, contrasenia, email, fecha_registro, fecha_de_nacimiento) VALUES ($1, $2, $3, $4, $5)",
      [nombre, contrasenia, email, fecha_registro, fecha_de_nacimiento]
    );
  } catch (error) {
    console.error("Error en createUsuario:", error);
    throw error;
  }
}

async function validateIdUsuario(id) {
  return (await conn.query("SELECT 1 FROM usuario WHERE id = $1 LIMIT 1", [id])).rowCount !== 0;
}

async function updateUsuarioById(id, nombre = null, contrasenia = null, email = null, fecha_de_nacimiento = null) {
  try {
    if (!id)
      throw new Error("ID de usuario requerido");
    
    if (validateIdUsuario(id) == false)
      throw new Error("ID de usuario invalida");

    if (nombre)
      query("UPDATE usuario SET nombre = $2 WHERE id = $1", [id, nombre]);
   
    if (contrasenia)
      query("UPDATE usuario SET contrasenia= $2 WHERE id = $1", [id, contrasenia]);
 
    if (email)
      query("UPDATE usuario SET email = $2 WHERE id = $1", [id, email]);

    if (fecha_de_nacimiento)
      query("UPDATE usuario SET fecha_nacimiento = $2 WHERE id = $1", [id, fecha_nacimiento]);
  } catch (error) {
    console.error("Error en updateUsuarioById:", error);
    throw error;
  }
}

async function deleteUsuarioById(id) {
  try {
    if (res.rowCount === 0) throw new Error("Usuario no encontrado");
    const res = await query("DELETE FROM usuarios WHERE id = $1", [id]);
  } catch (error) {
    console.error("Error en deleteUsuarioById:", error);
    throw error;
  }
}

export default { getAllUsuarios, getUsuarioById, createUsuario, updateUsuarioById, deleteUsuarioById };
