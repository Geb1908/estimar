// Defino variables globales
let materiales = [];
let dimensiones = "";
let computo = "";
let formDimensiones = document.getElementById("formDimensiones");
let alertaDimensionObra = document.getElementById("alertaDimensionObra");
let botonConfirmar = document.getElementById("botonConfirmar");
let pesoCartelas = "";
let bulones = "";
let parantes = "";
let pasamanos = "";
let guardarrodilla = "";
let guardapie = "";
let extremos = "";
let perfil = "";
let precioUnit = "";
let pesoUnit = "";
let pesoPerfil = "";
let ratio = "";
const url = "../db.json";
const dolar_url =
  "https://v6.exchangerate-api.com/v6/bbed04936b3ec9e6de4be2bd/latest/USD";

//Evento que se dispara cuando se confirman datos del formulario de Obra
botonConfirmar.addEventListener("click", () => {
  ejecutar = new gestionarCalculadora();
  botones = new Botones();
  ejecutar.validar_formularioCalculadora();
  if (ejecutar.validar_formularioCalculadora()) {
    ejecutar.crearDimensiones();
    ejecutar.guardarDimensiones();
    ejecutar.calcular();
    ejecutar.buscarCambio();
  }
});

//Evento que se dispara cuando pulsa "Enter"
formDimensiones.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    ejecutar = new gestionarCalculadora();
    botones = new Botones();
    ejecutar.validar_formularioCalculadora();
    if (ejecutar.validar_formularioCalculadora()) {
      ejecutar.crearDimensiones();
      ejecutar.guardarDimensiones();
      ejecutar.calcular();
      ejecutar.buscarCambio();
    }
  }
});
