class Usuario {
  constructor(id, nombre, email, fecha_registro, rol) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id invalido: debe ser un entero positivo");

    if (typeof nombre !== "string" || nombre.length == 0)
      throw new Error("nombre invalido: debe ser un string no vacio");
     
    if (typeof email !== "string" || !email.includes("@"))
      throw new Error("email inválido: debe contener un '@'");

    if (typeof fecha_registro !== "string" || isNaN(new Date(fecha_registro)))
      throw new Error("fecha_registro inválida");

    if (typeof rol !== "string" || rol.length === 0)
      throw new Error("rol inválido: debe ser un string no vacío");

    this.id = id;
    this.nombre = nombre;
    this.email = email;
    this.fecha_registro = fecha_registro;
    this.rol = rol;
  }
}

module.exports = Usuario;
