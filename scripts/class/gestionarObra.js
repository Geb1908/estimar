class gestionarObra {
  //Defino función que valida el formulario "Datos de la obra"
  validar_formularioObra() {
    alertaDatosObra.innerHTML = "";

    let input_empresa = document.getElementById("datoEmpresa").value.trim();
    let input_cliente = document.getElementById("datoCliente").value.trim();
    let input_proyecto = document.getElementById("datoProyecto").value.trim();
    let input_lugar = document.getElementById("datoLugar").value.trim();

    let arreglo_alerta = new Array();
    //Reviso input empresa
    if (!input_empresa) {
      arreglo_alerta.push("Ingrese el nombre de su empresa");
    } else if (!isNaN(parseInt(input_empresa))) {
      arreglo_alerta.push("Ingrese un nombre válido para su empresa");
    }
    // Reviso input cliente
    if (!input_cliente) {
      arreglo_alerta.push("Ingrese el nombre de su cliente");
    } else if (!isNaN(parseInt(input_cliente))) {
      arreglo_alerta.push("Ingrese un nombre válido para su cliente");
    }
    // Reviso input proyecto
    if (!input_proyecto) {
      arreglo_alerta.push("Ingrese el nombre del proyecto");
    } else if (!isNaN(parseInt(input_proyecto))) {
      arreglo_alerta.push("Ingrese un nombre válido para el proyecto");
    }
    // Reviso input lugar
    if (!input_lugar) {
      arreglo_alerta.push("Ingrese el lugar de ejecución de la obra");
    } else if (!isNaN(parseInt(input_lugar))) {
      arreglo_alerta.push(
        "Ingrese un nombre válido para el lugar de ejecución"
      );
    }

    // Genero elementos HTML para alerta de error
    if (arreglo_alerta.length > 0) {
      let alerta = document.createElement("div");
      alerta.classList.add("alert");
      alerta.classList.add("alert-danger");
      alerta.innerHTML = `
        <h4 class="alert-heading">Error</h4>
        <p class="mb-0">Verifique haber cargado correctamente todos los campos.</p>
        <hr>
    `;
      alertaDatosObra.appendChild(alerta);

      arreglo_alerta.forEach((elemento) => {
        alerta.appendChild(this.crear_alerta(elemento));
      });
      alertaDatosObra.appendChild(alerta);
    }

    return arreglo_alerta.length == 0;
  }

  guardarObra() {
    //Genero elementos HTML para alerta de éxito
    let alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-success");
    alerta.innerHTML = `
    <h4 class="alert-heading">¡Excelente!</h4>
    <p class="mb-0">Se han cargado con éxito los siguientes datos:</p>
    <p class="mb-0">Empresa: ${obra.empresa} | Cliente: ${obra.cliente} | Proyecto: ${obra.proyecto} | Lugar: ${obra.lugar}</p>
    <hr>
    `;
    alertaDatosObra.appendChild(alerta);
    //Reseteo formulario
    this.resetear_formulario();
    // Habilito botón editar
    botones.habilitar_editar();
    // Habilito botón continuar
    botones.habilitar_continuar();
    // Deshabilito botón confirmar
    botones.deshabilitar_confirmar();
    // Oculto formulario
    formProyecto.setAttribute("style", "display: none;");
  }

  //Defino función que genera alertas
  crear_alerta(mensaje) {
    let p1 = document.createElement("p");
    p1.textContent = mensaje;
    return p1;
  }

  resetear_formulario() {
    document.getElementById("datoEmpresa").value = "";
    document.getElementById("datoCliente").value = "";
    document.getElementById("datoProyecto").value = "";
    document.getElementById("datoLugar").value = "";
  }

  //Defino función que construye el objeto Obra
  crearObra() {
    let empresa = document.getElementById("datoEmpresa").value.trim();
    let cliente = document.getElementById("datoCliente").value.trim();
    let proyecto = document.getElementById("datoProyecto").value.trim();
    let lugar = document.getElementById("datoLugar").value.trim();

    obra = new Obra(empresa, cliente, proyecto, lugar);

    const datosObra = JSON.stringify(obra);
    sessionStorage.setItem("obra", datosObra);
  }
}
