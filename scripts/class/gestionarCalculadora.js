class gestionarCalculadora {
  //Defino función que valida el formulario "Dimension de la obra"
  validar_formularioCalculadora() {
    alertaDimensionObra.innerHTML = "";

    let input_longitudTotal = document
      .getElementById("longitudTotal")
      .value.trim();
    let input_distanciaParantes = document
      .getElementById("distanciaParantes")
      .value.trim();
    let input_alturaParante = document
      .getElementById("alturaParante")
      .value.trim();
    let input_distanciaManoRodilla = document
      .getElementById("distanciaManoRodilla")
      .value.trim();
    let input_distanciaRodillaPie = document
      .getElementById("distanciaRodillaPie")
      .value.trim();

    let arreglo_alerta = new Array();
    //Reviso input Longitud Total
    if (!input_longitudTotal) {
      arreglo_alerta.push("Ingrese la longitud total");
    } else if (isNaN(parseInt(input_longitudTotal))) {
      arreglo_alerta.push("Ingrese una cantidad válida para la longitud total");
    } else if (
      !isNaN(parseInt(input_longitudTotal)) &&
      parseInt(input_longitudTotal) < 350
    ) {
      arreglo_alerta.push("Ingrese una cantidad válida para la longitud total");
    }
    // Reviso input Distancia entre Parantes
    if (!input_distanciaParantes) {
      arreglo_alerta.push("Ingrese la distancia entre parantes");
    } else if (isNaN(parseInt(input_distanciaParantes))) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la distancia entre parantes"
      );
    } else if (
      (!isNaN(parseInt(input_distanciaParantes)) &&
        parseInt(input_distanciaParantes) > parseInt(input_longitudTotal)) ||
      (!isNaN(parseInt(input_distanciaParantes)) &&
        parseInt(input_distanciaParantes) < 350)
    ) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la distancia entre parantes"
      );
    }
    // Reviso Altura Parante
    if (!input_alturaParante) {
      arreglo_alerta.push("Ingrese la altura de los parantes");
    } else if (isNaN(parseInt(input_alturaParante))) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la altura de los parantes"
      );
    } else if (
      !isNaN(parseInt(input_alturaParante)) &&
      parseInt(input_alturaParante) < 1100
    ) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la altura de los parantes"
      );
    }
    // Reviso Distancia entre pasamano y guardarrodilla
    if (!input_distanciaManoRodilla) {
      arreglo_alerta.push(
        "Ingrese la distancia entre el pasamano y guardarrodilla"
      );
    } else if (isNaN(parseInt(input_distanciaManoRodilla))) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la distancia entre el pasamano y guardarodilla"
      );
    } else if (
      (!isNaN(parseInt(input_distanciaManoRodilla)) &&
        parseInt(input_distanciaManoRodilla) >
          parseInt(input_alturaParante) -
            parseInt(input_distanciaRodillaPie) -
            100) ||
      (!isNaN(parseInt(input_distanciaManoRodilla)) &&
        parseInt(input_distanciaManoRodilla) < 400)
    ) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la distancia entre el pasamano y guardarodilla"
      );
    }
    // Reviso Distancia entre guardarrodilla y guardapie
    if (!input_distanciaRodillaPie) {
      arreglo_alerta.push(
        "Ingrese la distancia entre el guardarrodilla y guardapie"
      );
    } else if (isNaN(parseInt(input_distanciaRodillaPie))) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la distancia entre el guardarodilla y guardapie"
      );
    } else if (
      (!isNaN(parseInt(input_distanciaRodillaPie)) &&
        parseInt(input_distanciaRodillaPie) >
          parseInt(input_alturaParante) -
            parseInt(input_distanciaManoRodilla) -
            100) ||
      (!isNaN(parseInt(input_distanciaRodillaPie)) &&
        parseInt(input_distanciaRodillaPie) < 400)
    ) {
      arreglo_alerta.push(
        "Ingrese una cantidad válida para la distancia entre el pasamano y guardarodilla"
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
      alertaDimensionObra.appendChild(alerta);

      arreglo_alerta.forEach((elemento) => {
        alerta.appendChild(this.crear_alerta(elemento));
      });
      alertaDimensionObra.appendChild(alerta);
    }

    return arreglo_alerta.length == 0;
  }

  //Defino función que genera alertas
  crear_alerta(mensaje) {
    let p1 = document.createElement("p");
    p1.textContent = mensaje;
    return p1;
  }

  guardarDimensiones() {
    //Genero elementos HTML para alerta de éxito
    let alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-success");
    alerta.innerHTML = `
    <h4 class="alert-heading">¡Excelente!</h4>
    <p class="mb-0">Se han cargado con éxito los siguientes datos:</p>
    <p class="mb-0">Longitud: ${dimensiones.largo} mm</p>
    <p class="mb-0">Distancia entre parantes: ${dimensiones.dParantes} mm</p>
    <p class="mb-0">Altura de parantes: ${dimensiones.altura} mm</p>
    <p class="mb-0"> Distancia entre pasamano y guardarrodilla: ${dimensiones.dPasamanoRodilla} mm</p>
    <p class="mb-0">Distancia entre guardarrodilla y guardapie: ${dimensiones.dGuardaRodillaPie} mm</p>
    <hr>
    `;
    alertaDimensionObra.appendChild(alerta);
    //Reseteo formulario
    this.resetear_formulario();
    // Habilito botón editar
    botones.habilitar_editar();
    // Habilito botón continuar
    botones.habilitar_continuar();
    // Deshabilito botón confirmar
    botones.deshabilitar_confirmar();
    // Oculto formulario
    formDimensiones.setAttribute("style", "display: none;");
  }

  //Defino función que genera alertas
  crear_alerta(mensaje) {
    let p1 = document.createElement("p");
    p1.textContent = mensaje;
    return p1;
  }

  resetear_formulario() {
    document.getElementById("longitudTotal").value = "";
    document.getElementById("distanciaParantes").value = "";
    document.getElementById("alturaParante").value = "";
    document.getElementById("distanciaManoRodilla").value = "";
    document.getElementById("distanciaRodillaPie").value = "";
  }

  //Defino función que construye las dimensiones
  crearDimensiones() {
    let longitudTotal = document.getElementById("longitudTotal").value.trim();
    let distanciaParantes = document
      .getElementById("distanciaParantes")
      .value.trim();
    let alturaParante = document.getElementById("alturaParante").value.trim();
    let distanciaManoRodilla = document
      .getElementById("distanciaManoRodilla")
      .value.trim();
    let distanciaRodillaPie = document
      .getElementById("distanciaRodillaPie")
      .value.trim();

    dimensiones = new Dimensiones(
      longitudTotal,
      distanciaParantes,
      alturaParante,
      distanciaManoRodilla,
      distanciaRodillaPie
    );

    const dimensionesBaranda = JSON.stringify(dimensiones);
    sessionStorage.setItem("dimensiones", dimensionesBaranda);
  }

  calcular() {
    const { largo, dParantes, altura, dPasamanoRodilla } = dimensiones;
    //Calculo peso de cartelas espesor 7,93 mm
    pesoCartelas =
      0.12 * 0.12 * Math.ceil(parseInt(largo) / parseInt(dParantes)) * 62.251;
    console.log(pesoCartelas);
    //Calculo cantidad de BUL. HEX. Ø5/8" x 1 3/4" A325 C/TCA A194 2H BI. DORADO
    bulones = Math.ceil(parseInt(largo) / parseInt(dParantes)) * 2;
    console.log(bulones);
    //Calculo cantidad de parantes
    parantes = Math.ceil(parseInt(largo) / parseInt(dParantes)) * altura;
    console.log(parantes);
    //Calculo cantidad de pasamanos
    pasamanos = parseInt(largo);
    console.log(pasamanos);
    //Calculo cantidad de guardarrodilla
    guardarrodilla = parseInt(largo);
    console.log(guardarrodilla);
    //Calculo cantidad de guardapie
    guardapie = parseInt(largo) - 6;
    console.log(guardapie);
    //Calculo cantidad de extremos
    extremos = parseInt(dPasamanoRodilla) * 2;
    console.log(dPasamanoRodilla);
    //Calculo cantidad total de perfil
    perfil = parantes + pasamanos + guardarrodilla + extremos;

    computo = new Computo(
      pesoCartelas,
      bulones,
      parantes,
      pasamanos,
      guardarrodilla,
      guardapie,
      extremos,
      perfil
    );

    const BOM = JSON.stringify(computo);
    sessionStorage.setItem("BOM", BOM);

    this.buscarPrecio();
    this.calcularPeso();
  }

  //Creo función para buscar el precio del elemento y almacenarlo
  buscarPrecio() {
    const seccion = JSON.parse(sessionStorage.getItem("seccion"));
    const baranda = JSON.parse(sessionStorage.getItem("baranda"));

    const { material, calidad } = baranda;
    //Filtro los materiales por sección
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        materiales = resultado.materiales;

        //Filtro el arreglo por seccion
        const filtro_precio = materiales
          .filter((el) => el.material.includes(material))
          .filter((el) => el.calidad.includes(calidad))
          .filter((el) => el.seccion.includes(seccion))
          .map((el) => el.precioUnit);

        //Obtengo el precio
        precioUnit = filtro_precio[0];

        console.log(precioUnit);

        const precioUnitPerfil = JSON.stringify(precioUnit);
        sessionStorage.setItem("precioPerfil", precioUnitPerfil);
      });
  }

  //Creo función para buscar el peso unitario y almacenarlo
  calcularPeso() {
    const seccion = JSON.parse(sessionStorage.getItem("seccion"));
    const baranda = JSON.parse(sessionStorage.getItem("baranda"));

    const { calidad } = baranda;
    //Filtro los materiales por sección
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        materiales = resultado.materiales;

        //Filtro el arreglo por seccion
        const filtro_peso = materiales
          .filter((el) => el.seccion.includes(seccion))
          .filter((el) => el.calidad.includes(calidad))
          .map((el) => el.pesoUnit);

        //Obtengo el peso unitario y calculo el precio total de la baranda
        pesoUnit = filtro_peso[0];
        pesoPerfil = (perfil / 1000) * pesoUnit;

        const pesoBul = 0.136;
        const pesoGuardapie = 5.06;
        const pesoBaranda =
          pesoCartelas +
          bulones * pesoBul +
          (guardapie / 1000) * pesoGuardapie +
          parseFloat(pesoPerfil);

        console.log(pesoBaranda);

        const pesoBarandaTot = JSON.stringify(pesoBaranda);
        sessionStorage.setItem("pesoBaranda", pesoBarandaTot);
      });
  }

  buscarCambio() {
    fetch(dolar_url)
      .then((response) => response.json())
      .then((data) => {
        let cotizacion = data.conversion_rates;
        console.log(cotizacion.ARS);
        ratio = (cotizacion.ARS * 1.052).toFixed(2);
        const tipoCambio = JSON.stringify(ratio);
        sessionStorage.setItem("ratio", tipoCambio);
      });
  }
}
