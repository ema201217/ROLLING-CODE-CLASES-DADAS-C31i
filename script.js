// Se debe crear un sistema que permita al usuario cargar los datos de sus amigos.
// Constara de una sola pantalla donde aparecerá la lista de amigos que  el usuario va ingresando en un formulario. Los datos que necesito de cada amigo son: nombre y foto (url)
// Cada card de amigo debería tener un botón para borrarlo de mis amigos si me peleo.
// Debería tener un botón que permitiera borrar todos los amigos

const crearId = () => Math.random().toString(36).substring(2, 18);

const $formulario = document.getElementById("formulario");
const $inputNombre = document.getElementById("nombre");
const $inputImagen = document.getElementById("imagen");
const $contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const $botonEliminarTodo = document.getElementById("boton-eliminar-todo");
// const $inputId = document.getElementById('idAmigo')
const $inputId = document.querySelector("#idAmigo");
const $botonSubmit = document.querySelector(".boton-submit");
const $botonReset = document.querySelector(".boton-reset");
const $tituloFormulario = document.querySelector(".titulo-formulario");
const $imagenPreview = document.querySelector("#idImagenPreview");

const amigosEnElLocalStorage = localStorage.getItem("amigos"); // obtenemos el JSON del almacenamiento local del navegador.
const amigosConvertidosJS = JSON.parse(amigosEnElLocalStorage); // transformamos el JSON a Javascript

let amigos = amigosConvertidosJS !== null ? amigosConvertidosJS : []

// CONDICIÓN ? VALOR SI ES VERDADERO : VALOR SI ES FALSO

const imageDefault =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeDkmja6hHPc4bVgZ7M7z5Nee_y-JiCx77CMJX6pW-wA&s";

const persistirAmigos = (infoAmigos) => {
  // convertimos de javascript a JSON
  const amigosFormatoJSON = JSON.stringify(infoAmigos);

  // guardamos en el local storage los amigos en el estado actual (con uno menos)
  localStorage.setItem("amigos", amigosFormatoJSON);
};

$formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  // si el input id oculto en la vista tiene valor entonces estamos en editar el amigo
  if ($inputId.value !== "") {
    // CÓDIGO PARA ACTUALIZAR UN AMIGO

    amigos = amigos.map((amigo) => {
      if (amigo.id === $inputId.value) {
        const amigoModificado = {
          id: amigo.id,
          nombre: $inputNombre.value,
          foto: $inputImagen.value,
        };
        return amigoModificado;
      }

      return amigo;
    });

    $botonSubmit.textContent = "Crear amigo";
    $botonSubmit.classList.remove("btn-success");
    $botonSubmit.classList.add("btn-primary");
    $tituloFormulario.textContent = "creación";
  } else {
    // CÓDIGO PARA CREAR UN NUEVO AMIGO
    // si no estamos en creación de un amigo
    const nuevoAmigo = {
      id: crearId(),
      nombre: $inputNombre.value,
      foto: $inputImagen.value,
    };

    amigos.push(nuevoAmigo); // array amigos con un nuevo amigo agregado
  }

  persistirAmigos(amigos); // guardamos los amigos en el local storage
  pintarAmigos(); // Pintamos los amigos en el DOM
  $formulario.reset(); // reseteamos el formulario (inputs en blanco)
  $imagenPreview.src = imageDefault; // reset de la imagen
});

const pintarAmigos = () => {
  $contenedorTarjetas.innerHTML = "";
  amigos.forEach((amigo) => {
    const estructuraCard = `
        <div class="card" style="width: 10rem;height: fit-content">
          <img src="${amigo.foto}" class="card-img-top" alt="...">
          <div class="card-body px-2">
            <h5 class="card-title" style="white-space:nowrap;text-overflow:ellipsis;overflow:hidden;">${amigo.nombre}</h5>
            <a href="#" class="btn btn-danger" onclick="borrarAmigoPorID('${amigo.id}')" >borrar</a>
            <button class="btn btn-outline-light text-primary" onclick="editarAmigo('${amigo.id}')">Editar</button>
          </div>
        </div>
      `;

    $contenedorTarjetas.innerHTML += estructuraCard;
  });
};

const borrarAmigoPorID = (id) => {
  // quitamos el amigo con el ID que ingresa a la función
  amigos = amigos.filter((amigo) => amigo.id !== id);
  persistirAmigos(amigos);
  pintarAmigos();
};

$botonEliminarTodo.addEventListener("click", () => {
  amigos = []; // amigo sufre cierta modificación
  persistirAmigos(amigos); // guardamos datos en el local storage
  pintarAmigos(); // pintamos en la vista
});

const editarAmigo = (id) => {
  const amigoEncontrado = amigos.find((amigo) => {
    return amigo.id === id;
  });

  $inputNombre.value = amigoEncontrado.nombre;
  $inputImagen.value = amigoEncontrado.foto;
  $inputId.value = amigoEncontrado.id;

  $botonSubmit.textContent = "Actualizar amigo";
  $botonSubmit.classList.add("btn-success");
  $botonSubmit.classList.remove("btn-primary");

  $imagenPreview.src = amigoEncontrado.foto;

  $tituloFormulario.textContent = "actualización";
  $botonReset.textContent = "Cancelar";
};

$inputImagen.addEventListener("change", () => {
  // Ejecutamos cuando ocurre un evento CHANGE
  console.log($inputImagen.value);
  $imagenPreview.src = $inputImagen.value;
});

$imagenPreview.addEventListener("error", () => {
  // CAPTURAMOS EL EVENTO ERROR DE LA IMAGEN QUE PREVISUALIZAMOS
  $imagenPreview.src = imageDefault;
});

$botonReset.addEventListener("click", () => {
  $botonSubmit.textContent = "Crear amigo";
  $botonReset.textContent = "Resetear";

  $botonSubmit.classList.remove("btn-success");
  $botonSubmit.classList.add("btn-primary");

  $imagenPreview.src = imageDefault;

  $tituloFormulario.textContent = "creación";
});

pintarAmigos();
