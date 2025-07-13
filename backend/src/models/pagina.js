class Pagina {
  constructor(id, id_aventura, titulo, contenido, imagen) {
    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id invalido: debe ser un entero positivo");

    if (typeof id_aventura !== "number" || !Number.isInteger(id) || id <= 0)
      throw new Error("id_aventura invalido: debe ser un entero positivo");

    if (typeof titulo !== "string" || titulo.length == 0)
      throw new Error("titulo invalido: debe ser un string no vacio");

    if (typeof contenido !== "string" || contenido.length == 0)
      throw new Error("contenido invalido: debe ser un string no vacio");

    if (typeof descripcion !== "string")
      throw new Error("descripcion invalida: debe ser un string");

    this.id = id;
    this.id_aventura = id_aventura;
    this.titulo = titulo;
    this.contenido = contenido;
    this.imagen = imagen;
  }
}

module.exports = Pagina;
