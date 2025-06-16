// archivo temporal para ver como funciona el carrusel de libros

const contenedor = document.getElementById("contenedor-libros");

// Usamos la API de Open Library
fetch('https://openlibrary.org/search.json?q=aventura')
  .then(res => res.json())
  .then(data => {
    const libros = data.docs.slice(0, 20); // Limitamos a los primeros 20 resultados
    console.log("Libros obtenidos:", libros); // DEBUG

    libros.forEach(item => {
      const titulo = item.title || "Sin título";
      const autor = item.author_name ? item.author_name[0] : "Autor desconocido";

      // Para obtener la imagen usamos el ID de portada (cover_i)
      const imagen = item.cover_i
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
        : "https://via.placeholder.com/200x300?text=Sin+imagen";

      const genero = item.subject ? item.subject[0] : "Género desconocido";

      //creamos el contenedor del libro
      const div = document.createElement("div");
      div.classList.add("libro");

      div.innerHTML = `
        <img src="${imagen}" alt="${titulo}">
        <div class="genero-libro">${genero}</div>
        <div class="titulo-libro">${titulo.toUpperCase()}</div>
        <div class="autor-libro">${autor}</div>
      `;

      contenedor.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Error al cargar libros:", error);
    contenedor.innerHTML = "<p>No se pudieron cargar los libros</p>";
  });

// animacion
let desplazamiento = 0;

setInterval(() => {
  desplazamiento += 1;
  contenedor.scrollLeft = desplazamiento;

  if (contenedor.scrollLeft + contenedor.clientWidth >= contenedor.scrollWidth) {
    desplazamiento = 0;
  }
}, 30);
