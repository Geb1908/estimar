//Defino variable global
const url = "../db.json";

// Evento que se dispara cuando se carga la pagina
document.addEventListener("DOMContentLoaded", () => {
  resumen = new gestionarResumen();
  resumen.crearResumen();
});
