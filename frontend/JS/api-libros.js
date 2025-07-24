const API_BASE = "http://localhost:3000/v1";
const portada_defecto = "./imagenes/portada_default2.jpg";

async function obtenerLibros() {
  try {
    const [libros, autores] = await Promise.all([ // promise.all ejecuta promesas en paralelo y no una detras de otra
      fetch(`${API_BASE}/aventuras`),
      fetch(`${API_BASE}/usuarios`)
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

async function crearLibro(infoLibro) {
  try {

    const libro = {
      autor_id: infoLibro.autor_id || 0,
      contrasenia: infoLibro.contrasenia || "",
      titulo: infoLibro.titulo || "",
      descripcion: infoLibro.descripcion || "",
      genero: infoLibro.genero || "",
      portada: infoLibro.portada || "",
      id_pagina_inicial: 0
    };

    const response = await fetch(`${API_BASE}/aventuras`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(libro),
    });

    if (!response.ok) throw new Error("Error al crear el libro");

    const nuevoLibro = await response.json();
    console.log("Libro creado:", nuevoLibro);
    return nuevoLibro;
  } catch (error) {
    console.error("Error al crear un nuevo libro:", error.message);
    throw error;
  }
}


async function actualizarLibro(id, infoLibro) {
  try {
    const response = await fetch(`${API_BASE}/aventuras/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(infoLibro),
    });

    if (!response.ok) throw new Error("Error al actualizar el libro");

    const libroActualizado = await response.json();
    console.log("Libro actualizado:", libroActualizado);
    return libroActualizado;
  } catch (error) {
    console.error("Error al actualizar el libro:", error.message);
    throw error;
  }
}

async function eliminarLibro(id) {
  try {
    const response = await fetch(`${API_BASE}/aventuras/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) throw new Error("Error al eliminar el libro");

    console.log(`Libro con ID ${id} eliminado correctamente`);
    return true;
  } catch (error) {
    console.error("Error al tratar de eliminar el libro:", error.message);
    throw error;
  }
}

function mostrarLibros(aventuras, usuarios) {
  const container = document.getElementById("container-libros");
  container.innerHTML = "";

  aventuras.forEach((aventura) => {
    const usuario = usuarios.find(u => u.id == aventura.id_usuario);
    const nombreAutor = usuario ? usuario.nombre : "Autor desconocido";
    const portada = aventura.portada || portada_defecto;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="card-imagen" src="${portada}" alt="Portada de ${aventura.titulo}" />
      <h3 class="card-titulo">${aventura.titulo}</h3>
      <h4 class="card-autor">${nombreAutor}</h4>
      <div class="card-actions">
        <a class="btn-libros" href="./leer.html">
          <span class="btn-icon">▶</span>
          <span class="btn-text">Empezar a leer</span>
        </a>
      </div>
    `;

    container.appendChild(card);
  });
}
async function mostrarUnicoLibro(id) {
  try {
    const libroRes = await fetch(`${API_BASE}/aventuras/${id}`);
    const libro = await libroRes.json();

    if (!libro) {
      throw new Error("Libro no encontrado");
    }

    const autorRes = await fetch(`${API_BASE}/usuarios/${libro.id_usuario}`); //con esto recibo los datos del autor
    const autor = await autorRes.json(); //aca convierto los datos en un objeto de js

    const nombreAutor = autor ? autor.nombre : "Autor desconocido"; //verifica que el nombre exista, sino devuelve error
    const portada = libro.portada || portada_defecto;

    const container = document.getElementById("container-libros"); //hago esta estructura para contener el libro
    container.innerHTML = `
      <div class="card">
        <img class="card-imagen" src="${portada}" alt="Portada de ${libro.titulo}" />
        <h3 class="card-titulo">${libro.titulo}</h3>
        <h4 class="card-autor">${nombreAutor}</h4>
        <div class="card-descripcion">
          <p>${libro.descripcion || "Sin descripción disponible."}</p>
        </div>
        <div class="card-actions">
          <a class="btn-libros" href="./leer.html">
            <span class="btn-icon">▶</span>
            <span class="btn-text">Empezar a leer</span>
          </a>
        </div>
      </div>
    `;
  } catch (error) {
    console.error("Error al mostrar el libro:", error.message);
    const errorDiv = document.getElementById("error");
    if (errorDiv) errorDiv.style.display = "block";
  }
}

async function crearPagina(idAventura, infoPagina) {
  try {
    const pagina = {
      titulo: infoPagina.titulo || "",
      contenido: infoPagina.contenido || "",
      imagen: infoPagina.imagen || "",
      imagen_de_fondo: infoPagina.imagen_de_fondo || "",
    };

    // Enviar la solicitud POST con el formato correcto
    const response = await fetch(`${API_BASE}/aventuras/${idAventura}/pagina`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pagina),
    });

    if (!response.ok) throw new Error("Error al crear la página");

    const nuevaPagina = await response.json();
    console.log("Página creada:", nuevaPagina);
    return nuevaPagina;
  } catch (error) {
    console.error("Error al crear una nueva página:", error.message);
    throw error;
  }
}


export { obtenerLibros, mostrarLibros, actualizarLibro, eliminarLibro, crearLibro, mostrarUnicoLibro, crearPagina, portada_defecto };