// Defino variables globales
let elementos = [];
const url = "../db.json";

// Evento que se dispara cuando se carga la pagina
document.addEventListener("DOMContentLoaded", () => {
  ejecutar = new gestionarElementos();
  ejecutar.mostrarElementos();
});

// Funcion para agregar al local el elemento elegido
function guardarElemento(i) {
  let seleccion = document.getElementById("title_" + i).textContent;

  Swal.fire({
    title: "¿Quiere confirmar el elemento seleccionado?",
    showCancelButton: true,
    confirmButtonColor: "blueviolet",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, confirmo",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      let elemento = new Elementos(
        document.getElementById("title_" + i).textContent
      );
      const elementoSeleccionado = JSON.stringify(elemento);
      sessionStorage.setItem("elemento", elementoSeleccionado);
      const botonSeleccionar = document.getElementById("btn-selec_" + i);
      botonSeleccionar.classList.add("disabled");
      const botonContinuar = document.getElementById("btn-cont_" + i);
      botonContinuar.classList.remove("disabled");
    }
  });
}

//Defino función aviso "Próximamente"
function avisoProximamente(i) {
  Swal.fire({
    confirmButtonColor: "blueviolet",
    icon: "error",
    title: "Oops...",
    text: "Aún no hemos desarrollado esta opción.",
    footer:
      '<a href="https://cafecito.app/fgbbros" target="_blank">Ayudanos con un Cafecito para que podamos desarrollarla lo antes posible.</a>',
  });
}
