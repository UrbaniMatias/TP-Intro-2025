// JS/api-libros.js
const API_BASE = "http://localhost:3002";
const portada_defecto = "../imagenes/portada_default.jpg";

async function obtenerLibros() {
  try {
    const [libros, autores] = await Promise.all([ // promise.all ejecuta promesas en paralelo y no una detras de otra
      fetch(`${API_BASE}/aventura`),
      fetch(`${API_BASE}/usuario`)
    ]);
    
    const aventuras = await libros.json();
    const usuarios = await autores.json();

    console.log("Aventuras:", aventuras);
    console.log("Usuarios:", usuarios);

    return { aventuras, usuarios };
  } catch (error) {
    console.error("Error al obtener libros:", error.message);
    const errorDiv = document.getElementById("error");
    if (errorDiv) errorDiv.style.display = "block";
    throw error; // Re-lanzamos el error para manejarlo donde se llame
  } finally {
    const cargandoDiv = document.getElementById("cargando");
    if (cargandoDiv) cargandoDiv.style.display = "none";
  }
}

export { obtenerLibros, portada_defecto };