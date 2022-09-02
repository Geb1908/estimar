class Botones {
  //Defino función que habilita botón Continuar
  habilitar_continuar() {
    let botonContinuar = document.getElementById("botonContinuar");
    botonContinuar.classList.remove("disabled");
  }

  //Defino función que habilita botón Continuar2
  habilitar_continuar2() {
    let botonContinuar2 = document.getElementById("botonContinuar2");
    botonContinuar2.classList.remove("disabled");
  }

  //Defino función que habilita botón Confirmar
  habilitar_confirmar() {
    let botonConfirmar = document.getElementById("botonConfirmar");
    botonConfirmar.classList.remove("disabled");
  }

  //Defino función que habilita botón Editar
  habilitar_editar() {
    let botonEditar = document.getElementById("botonEditar");
    botonEditar.classList.remove("disabled");
  }

  //Defino función que deshabilita botón Confirmar
  deshabilitar_confirmar() {
    let botonConfirmar = document.getElementById("botonConfirmar");
    botonConfirmar.classList.add("disabled");
  }
}
