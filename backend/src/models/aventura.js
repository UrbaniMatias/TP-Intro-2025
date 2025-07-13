class Aventura {
  constructor(id, titulo, descripcion) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id invalido: debe ser un entero positivo");

    if (typeof titulo !== "string" || titulo.length == 0)
      throw new Error("titulo invalido: debe ser un string no vacio");

    if (typeof descripcion !== "string")
      throw new Error("descripcion invalida: debe ser un string");

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}

module.exports = Aventura;
