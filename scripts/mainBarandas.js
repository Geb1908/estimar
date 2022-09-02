//Defino variables globales
// Contenedores
let materialBarandas = document.getElementById("materialBarandas");
let calidadBarandas = document.getElementById("calidadBarandas");
let tipoBarandas = document.getElementById("tipoBarandas");
let secciones_tubulares = document.getElementById("secciones_tubulares");
let secciones_angulares = document.getElementById("secciones_angulares");
let alertaSeleccionBaranda = document.getElementById("alertaSeleccionBaranda");
// Variables booleanas para validación de funciones
let flag_aoco = false;
let flag_inox = false;
let flag_usoMecanico = false;
let flag_sinCostura = false;
let flag_conCostura = false;
let flag_sinCostura_inox = false;
let flag_conCostura_inox = false;
let flag_estructural = false;
let flag_estructuralInox = false;
let flag_tubular = false;
let flag_angular = false;
let flag_seccionTub = false;
let flag_seccionAng = false;
let flag_acabadoTub = false;
let flag_acabadoAng = false;

//Inicializo clases
botones = new Botones();
ejecutar = new gestionarBarandas();

// Evento que se dispara cuando se carga la pagina
document.addEventListener("DOMContentLoaded", () => {
  ejecutar.iniciarBarandas();
});

//Creo evento sobre botón confirmar
let botonConfirmar = document.getElementById("botonConfirmar");
botonConfirmar.addEventListener("click", () => {
  ejecutar.mostrar_secciones();
  ejecutar.guardarBaranda();
});

//Creo evento sobre selector tubular
let selector_tub = document.getElementById("selector_tub");
selector_tub.addEventListener("change", () => {
  let seccion_elegida_tub =
    selector_tub.options[selector_tub.selectedIndex].value;
  const seccionBaranda_tubular = JSON.stringify(seccion_elegida_tub);
  sessionStorage.setItem("seccion", seccionBaranda_tubular);
  flag_seccionTub = true;
  if (flag_acabadoTub){
    botones.habilitar_continuar();
    flag_seccionTub = false;
    flag_acabadoTub = false;
  }
});
//Creo evento sobre selector angular
let selector_ang = document.getElementById("selector_ang");
selector_ang.addEventListener("change", () => {
  let seccion_elegida_ang =
    selector_ang.options[selector_ang.selectedIndex].value;
  const seccionBaranda_angular = JSON.stringify(seccion_elegida_ang);
  sessionStorage.setItem("seccion", seccionBaranda_angular);
  flag_seccionAng = true;
  if (flag_acabadoAng){
    botones.habilitar_continuar2();
    flag_seccionAng = false;
    flag_acabadoAng = false;
  }
});
//Creo evento sobre selector acabado Tubular
let selector_acabadoTub = document.getElementById("selector_acabadoTub");
selector_acabadoTub.addEventListener("change", () => {
  let seccion_acabado_tub =
    selector_acabadoTub.options[selector_acabadoTub.selectedIndex].value;
  const acabadoTub = JSON.stringify(seccion_acabado_tub);
  sessionStorage.setItem("acabado", acabadoTub);
  flag_acabadoTub = true;
  if (flag_seccionTub){
    botones.habilitar_continuar();
    flag_seccionTub = false;
    flag_acabadoTub = false;
  }
});
//Creo evento sobre selector acabado Angular
let selector_acabadoAng = document.getElementById("selector_acabadoAng");
selector_acabadoAng.addEventListener("change", () => {
  let seccion_acabado_ang =
    selector_acabadoAng.options[selector_acabadoAng.selectedIndex].value;
  const acabadoAng = JSON.stringify(seccion_acabado_ang);
  sessionStorage.setItem("acabado", acabadoAng);
  flag_acabadoAng = true;
  if (flag_seccionAng){
    botones.habilitar_continuar2();
    flag_seccionAng = false;
    flag_acabadoAng = false;
  }
});
