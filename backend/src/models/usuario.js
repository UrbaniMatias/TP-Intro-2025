class Usuario {
  constructor(id, nombre, constrasenia) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id invalido: debe ser un entero positivo");

    if (typeof nombre !== "string" || nombre.length == 0)
      throw new Error("nombre invalido: debe ser un string no vacio");

    if (typeof constrasenia !== "string" || constrasenia.length == 0)
      throw new Error("constrasenia invalida: debe ser un string no vacio");

    this.id = id;
    this.nombre = nombre;
    this.constrasenia = constrasenia;
  }
}

module.exports = Usuario;
