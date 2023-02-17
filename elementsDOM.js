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

export {
  $formulario,
  $inputNombre,
  $inputImagen,
  $contenedorTarjetas,
  $botonEliminarTodo,
  $inputId,
  $botonSubmit,
  $botonReset,
  $tituloFormulario,
  $imagenPreview,
};
