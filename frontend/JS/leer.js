// const aventurasFijos = [
//   {
//     id: 1,
//     titulo: "La Cueva Misteriosa",
//     id_usuario: 1,
//     portada: "",
//     fecha_creacion: "2010-06-01T12:00:00Z"
//   },
//   {
//     id: 2,
//     titulo: "El Tesoro de los Mares",
//     id_usuario: 2,
//     portada: "https://picsum.photos/200/300",
//     fecha_creacion: "2022-03-01T12:00:00Z"
//   },
//   {
//     id: 3,
//     titulo: "El Laberinto del Tiempo",
//     id_usuario: 3,
//     portada: "https://picsum.photos/id/1003/200/300",
//     fecha_creacion: "2024-09-01T12:00:00Z"
//   }
// ];

// const paginasFijas = [
//   {
//     id: 1,
//     id_aventura: 1,
//     titulo: "Capítulo 1: La encrucijada",
//     contenido: "Despiertas en un bosque oscuro. Hay dos caminos: uno hacia una cabaña iluminada, otro hacia un sendero sombrío.",
//     imagen: ""
//   },
//   {
//     id: 2,
//     id_aventura: 1,
//     titulo: "Capítulo 2: La cabaña",
//     contenido: "La cabaña parece abandonada, pero hay una luz parpadeando adentro. Escuchás pasos detrás tuyo...",
//     imagen: ""
//   },
//   {
//     id: 3,
//     id_aventura: 1,
//     titulo: "Capítulo 3: El sendero sombrío",
//     contenido: "El camino se estrecha y te rodea una niebla espesa. Una figura te observa desde los árboles.",
//     imagen: "https://picsum.photos/200/300"
//   },
//   {
//     id: 4,
//     id_aventura: 1,
//     titulo: "Capítulo 4: El sendero no era la opción",
//     contenido: "Apareció un loco y te mató. Fin.",
//     imagen: "https://picsum.photos/200/300"
//   },
//   {
//     id: 5,
//     id_aventura: 1,
//     titulo: "Capítulo 5: Dentro de la cabaña",
//     contenido: "Encontrás un diario antiguo que habla de un ritual para escapar del bosque. Afuera, alguien golpea la puerta.",
//     imagen: "https://picsum.photos/id/102/200/300"
//   },
//   {
//     id: 6,
//     id_aventura: 1,
//     titulo: "Capítulo 6: El visitante inesperado",
//     contenido: "Al abrir la puerta, una niña te entrega una caja y desaparece entre los árboles.",
//     imagen: "https://picsum.photos/id/103/200/300"
//   },
//   {
//     id: 7,
//     id_aventura: 1,
//     titulo: "Capítulo 7: La caja",
//     contenido: "Dentro hay una brújula que apunta en una dirección distinta a los caminos conocidos.",
//     imagen: "https://picsum.photos/id/104/200/300"
//   },
//   {
//     id: 8,
//     id_aventura: 1,
//     titulo: "Capítulo 8: Camino oculto",
//     contenido: "Sigues la brújula y encuentras un lago cubierto de niebla. En el centro hay una torre solitaria.",
//     imagen: "https://picsum.photos/id/104/200/300"
//   },
//   {
//     id: 9,
//     id_aventura: 1,
//     titulo: "Capítulo 9: La torre del eco",
//     contenido: "Cada sonido que hacés dentro se repite con una voz distinta. En la cima, hay un espejo antiguo.",
//     imagen: "https://picsum.photos/id/106/200/300"
//   },
//   {
//     id: 10,
//     id_aventura: 1,
//     titulo: "Capítulo 10: El reflejo",
//     contenido: "El espejo muestra una versión de vos que te habla. Te ofrece una salida... a cambio de un recuerdo.",
//     imagen: "https://picsum.photos/id/107/200/300"
//   },
//   {
//     id: 11,
//     id_aventura: 1,
//     titulo: "Capítulo final: La decisión",
//     contenido: "Entregás tu recuerdo más preciado. El bosque se disuelve a tu alrededor y despertás en tu cama. ¿Fue un sueño?",
//     imagen: "https://picsum.photos/id/108/200/300"
//   },

//   {
//     id: 12,
//     id_aventura: 2,
//     titulo: "Capítulo 1: El mapa robado",
//     contenido: "Encontrás un mapa dentro de una botella en la playa. En él, una ruta hacia una isla prohibida: Isla Calavera.",
//     imagen: "https://picsum.photos/id/200/200/300"
//   },
//   {
//     id: 13,
//     id_aventura: 2,
//     titulo: "Capítulo 2: El capitán Morgan",
//     contenido: "Un viejo marinero te advierte: 'Esa isla está maldita. Pero si aún vas... yo seré tu timonel.'",
//     imagen: "https://picsum.photos/id/201/200/300"
//   },
//   {
//     id: 14,
//     id_aventura: 2,
//     titulo: "Capítulo 3: La tormenta",
//     contenido: "El mar se levanta con furia. Rayos, truenos y una silueta gigante entre las olas. ¿Es un kraken?",
//     imagen: "https://picsum.photos/id/202/200/300"
//   },
//   {
//     id: 15,
//     id_aventura: 2,
//     titulo: "Capítulo 4: Naufragio",
//     contenido: "Despertás en la orilla. Solo. El mapa sigue en tu mano, mojado pero legible.",
//     imagen: "https://picsum.photos/id/203/200/300"
//   },
//   {
//     id: 16,
//     id_aventura: 2,
//     titulo: "Capítulo 5: Isla Calavera",
//     contenido: "Frente a vos se alza una cueva con la forma de una calavera. Desde adentro, susurra el viento.",
//     imagen: "https://picsum.photos/id/204/200/300"
//   },
//   {
//     id: 17,
//     id_aventura: 2,
//     titulo: "Capítulo 6: Trampa mortal",
//     contenido: "Pisas una baldosa equivocada y flechas salen disparadas. Te salvas por poco. Esto no es solo una cueva... es una tumba.",
//     imagen: "https://picsum.photos/id/205/200/300"
//   },
//   {
//     id: 18,
//     id_aventura: 2,
//     titulo: "Capítulo 7: El cofre",
//     contenido: "Lo encontrás. Brilla con oro, joyas... y un cráneo que te observa. Tiene una inscripción: 'El que toma, paga.'",
//     imagen: "https://picsum.photos/id/206/200/300"
//   },
//   {
//     id: 19,
//     id_aventura: 2,
//     titulo: "Capítulo 8: La maldición",
//     contenido: "Al tocar una moneda, todo se oscurece. Tu reflejo en el oro... no tiene ojos.",
//     imagen: "https://picsum.photos/id/207/200/300"
//   },
//   {
//     id: 20,
//     id_aventura: 2,
//     num_pagina:7,
//     titulo: "Capítulo final: El precio del tesoro",
//     contenido: "Regresás al mundo, pero el sol te quema, el agua te quema, la vida ya no es tuya. Sos rico. Pero maldito.",
//     imagen: "https://picsum.photos/id/208/200/300"
//   }
// ];

// const usuariosFijos = [
//   { id: 1, nombre: "Juan", apellido: "Pérez" },
//   { id: 2, nombre: "María", apellido: "López" },
//   { id: 3, nombre: "Carlos", apellido: "Gómez" }
// ];

// const opcionesFijas = [
//   { id: 1, descripcion: "Ir a la cabaña", id_pagina_origen: 1, id_pagina_destino: 2 },
//   { id: 2, descripcion: "Tomar el sendero sombrío", id_pagina_origen: 1, id_pagina_destino: 3 },
//   { id: 3, descripcion: "Entrar en la cabaña", id_pagina_origen: 2, id_pagina_destino: 3 },
//   { id: 4, descripcion: "Volver al inicio", id_pagina_origen: 1, id_pagina_destino: 6 },
//   { id: 5, descripcion: "Matar a todos", id_pagina_origen: 3, id_pagina_destino:  7},
//   { id: 6, descripcion: "Entrar en la cabaña", id_pagina_origen: 2, id_pagina_destino: 3 },
//   { id: 7, descripcion: "Volver al inicio", id_pagina_origen: 3, id_pagina_destino: 1 },
//   { id: 8, descripcion: "Matar a todos", id_pagina_origen: 3, id_pagina_destino:  7}
// ];

import { mostrarAventuraEnLectura, obtenerAventuraPorID, portada_defecto } from "./js/funciones.js";

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idAventura = parseInt(urlParams.get("id"));
  const numeroPagina = parseInt(urlParams.get("pagina")) || 1;

  if (!idAventura) {
    document.querySelector(".contenido").innerHTML = "<p class='font-Lato'>Aventura no especificada. Volvé al inicio.</p>";
    return;
  }

  // Mostrar la aventura y la página actual
  await mostrarAventuraEnLectura(idAventura, numeroPagina);

  // Extra: mostrar título barra, portada y autor
  try {
    const aventura = await obtenerAventuraPorID(idAventura);

    if (aventura) {
      document.getElementById("barra-titulo").textContent = aventura.titulo;
      document.getElementById("barra-portada").src = aventura.portada || portada_defecto;

      const autorRes = await fetch(`http://localhost:3000/v1/usuarios/${aventura.id_usuario}`);
      const autor = await autorRes.json();
      document.getElementById("barra-autor").textContent = autor ? `${autor.nombre} ${autor.apellido}` : "Autor desconocido";

      // Cambiar el título de la página HTML
      const paginaActual = aventura.paginas?.find(p => p.numero === numeroPagina);
      document.title = `${paginaActual?.titulo || "Capítulo"} - ${aventura.titulo}`;
    }
  } catch (error) {
    console.error("Error cargando datos adicionales:", error.message);
  }

  // Botones anterior y siguiente
  const btnAnterior = document.getElementById("btn-anterior");
  const btnSiguiente = document.getElementById("btn-siguiente");

  btnAnterior.onclick = () => {
    if (numeroPagina > 1) {
      window.location.href = `leer.html?id=${idAventura}&pagina=${numeroPagina - 1}`;
    }
  };

  btnSiguiente.onclick = async () => {
    const aventura = await obtenerAventuraPorID(idAventura);
    const totalPaginas = aventura?.paginas?.length || 0;
    if (numeroPagina < totalPaginas) {
      window.location.href = `leer.html?id=${idAventura}&pagina=${numeroPagina + 1}`;
    }
  };
});
