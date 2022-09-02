//Defino variables globales
let obra = "";
let formProyecto = document.getElementById("formProyecto");
let alertaDatosObra = document.getElementById("alertaDatosObra");
let botonConfirmar = document.getElementById("botonConfirmar");

//Evento que se dispara cuando se confirman datos del formulario de Obra
botonConfirmar.addEventListener("click", () => {
  ejecutar = new gestionarObra();
  botones = new Botones();
  ejecutar.validar_formularioObra();
  if (ejecutar.validar_formularioObra()) {
    ejecutar.crearObra();
    ejecutar.guardarObra();
  }
});

//Evento que se dispara cuando pulsa "Enter"
formProyecto.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    ejecutar = new gestionarObra();
    botones = new Botones();
    ejecutar.validar_formularioObra();
    if (ejecutar.validar_formularioObra()) {
      ejecutar.crearObra();
      ejecutar.guardarObra();
    }
  }
});
