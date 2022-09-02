class gestionarBarandas {
  iniciarBarandas() {
    //Creo evento sobre botón radio "Acero al carbono"
    let radio_aceroCarbono = document.getElementById("radio_aceroCarbono");
    radio_aceroCarbono.addEventListener("click", () => {
      if (flag_aoco == false && flag_inox == false) {
        flag_aoco = true;
        this.tiposBarandas();
      } else if (flag_aoco == false && flag_inox) {
        flag_aoco = true;
        this.tipo_remover();
        this.calidad_remover();
        botones.deshabilitar_confirmar();
      } else if (flag_aoco && flag_inox) {
        flag_aoco = false;
        this.tiposBarandas();
        botones.deshabilitar_confirmar();
      } else if (flag_aoco && flag_inox == false) {
        flag_aoco = false;
        this.tipo_remover();
        this.calidad_remover();
      }
    });

    //Creo evento sobre botón radio "Acero inoxidable"
    let radio_aceroInoxidable = document.getElementById(
      "radio_aceroInoxidable"
    );
    radio_aceroInoxidable.addEventListener("click", () => {
      if (flag_aoco == false && flag_inox == false) {
        flag_inox = true;
        this.tiposBarandas();
      } else if (flag_aoco && flag_inox == false) {
        flag_inox = true;
        this.tipo_remover();
        this.calidad_remover();
        botones.deshabilitar_confirmar();
      } else if (flag_aoco && flag_inox) {
        flag_inox = false;
        this.tiposBarandas();
      } else if (flag_aoco == false && flag_inox) {
        flag_inox = false;
        this.tipo_remover();
        this.calidad_remover();
        botones.deshabilitar_confirmar();
      }
    });
  }

  //Creo función para mostrar tipos de barandas
  tiposBarandas() {
    // Genero elementos HTML para selección del tipo de barandas
    let contenedor = document.createElement("div");
    contenedor.classList.add("container", "pt-3");
    contenedor.innerHTML = `
      <div class="row d-flex align-items-center">
        <div class="col-12 align-items-start">
          <h6>Selecciona la sección:</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_tubular"
            />
            <label class="form-check-label" for="radio_tubular"
              >Tubular</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_angular"
            />
            <label class="form-check-label" for="radio_angular"
              >Angular</label
            >
          </div>
        </div>
      </div>`;
    tipoBarandas.appendChild(contenedor);
    //Creo acciones sobre radios
    if (flag_aoco) {
      /**Sobre botón radio "Tubular"*/
      let radio_tubular = document.getElementById("radio_tubular");
      radio_tubular.addEventListener("click", () => {
        if (flag_tubular == false && flag_angular == false) {
          this.calidad_aceroCarbonoTub();
          flag_tubular = true;
        } else if (flag_tubular && flag_angular == false) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_tubular = false;
        } else if (flag_tubular && flag_angular) {
          flag_tubular = false;
          this.calidad_aceroCarbonoAng();
        } else if (flag_tubular == false && flag_angular) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_tubular = true;
        }
      });
      /**Sobre botón radio "Angular"*/
      let radio_angular = document.getElementById("radio_angular");
      radio_angular.addEventListener("click", () => {
        if (flag_tubular == false && flag_angular == false) {
          this.calidad_aceroCarbonoAng();
          flag_angular = true;
        } else if (flag_tubular == false && flag_angular) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_angular = false;
        } else if (flag_tubular && flag_angular) {
          this.calidad_aceroCarbonoTub();
          flag_angular = false;
        } else if (flag_tubular && flag_angular == false) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_angular = true;
        }
      });
    } else if (flag_inox) {
      /**Sobre botón radio "Tubular"*/
      let radio_tubular = document.getElementById("radio_tubular");
      radio_tubular.addEventListener("click", () => {
        if (flag_tubular == false && flag_angular == false) {
          this.calidad_aceroInoxidableTub();
          flag_tubular = true;
        } else if (flag_tubular && flag_angular == false) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_tubular = false;
        } else if (flag_tubular && flag_angular) {
          this.calidad_aceroInoxidableAng();
          flag_tubular = false;
        } else if (flag_tubular == false && flag_angular) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_tubular = true;
        }
      });
      /**Sobre botón radio "Angular"*/
      let radio_angular = document.getElementById("radio_angular");
      radio_angular.addEventListener("click", () => {
        if (flag_tubular == false && flag_angular == false) {
          this.calidad_aceroInoxidableAng();
          flag_angular = true;
        } else if (flag_tubular == false && flag_angular) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_angular = false;
        } else if (flag_tubular && flag_angular) {
          this.calidad_aceroInoxidableTub();
          flag_angular = false;
        } else if (flag_tubular && flag_angular == false) {
          this.calidad_remover();
          botones.deshabilitar_confirmar();
          flag_angular = true;
        }
      });
    }
  }

  //Creo función para mostrar calidades de barandas tubulares en acero al carbono
  calidad_aceroCarbonoTub() {
    // Genero elementos HTML para selección de calidad de material
    let contenedor = document.createElement("div");
    contenedor.classList.add("container", "pt-3");
    contenedor.innerHTML = `
      <div class="row d-flex align-items-center">
        <div class="col-12 align-items-start">
          <h6>Selecciona la calidad:</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_usoMecanico"
            />
            <label class="form-check-label" for="radio_usoMecanico"
              >Uso Mecánico</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_sinCostura"
            />
            <label class="form-check-label" for="radio_sinCostura"
              >Sin Costura (A106 Gr.B)</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_conCostura"
            />
            <label class="form-check-label" for="radio_conCostura"
              >Con Costura (A53 Gr.B)</label
            >
          </div>
        </div>
      </div>`;
    calidadBarandas.appendChild(contenedor);
    //Creo eventos sobre radios
    /**Sobre botón radio "Uso Mecánico"*/
    let radio_usoMecanico = document.getElementById("radio_usoMecanico");
    radio_usoMecanico.addEventListener("click", () => {
      this.check_usoMecanico();
    });
    /**Sobre botón radio "Sin Costura"*/
    let radio_sinCostura = document.getElementById("radio_sinCostura");
    radio_sinCostura.addEventListener("click", () => {
      this.check_sinCostura();
    });
    /**Sobre botón radio "Con Costura"*/
    let radio_conCostura = document.getElementById("radio_conCostura");
    radio_conCostura.addEventListener("click", () => {
      this.check_conCostura();
    });
  }

  //Creo función para mostrar calidades de barandas angulares en acero al carbono
  calidad_aceroCarbonoAng() {
    // Genero elementos HTML para selección de calidad de material
    let contenedor = document.createElement("div");
    contenedor.classList.add("container", "pt-3");
    contenedor.innerHTML = `
      <div class="row d-flex align-items-center">
        <div class="col-12 align-items-start">
          <h6>Selecciona la calidad:</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_estructural"
            />
            <label class="form-check-label" for="radio_estructural"
              >Estructural (A36 / F24)</label
            >
          </div>
        </div>
      </div>`;
    calidadBarandas.appendChild(contenedor);
    //Creo eventos sobre radios
    /**Sobre botón radio "Estructural"*/
    let radio_estructural = document.getElementById("radio_estructural");
    radio_estructural.addEventListener("click", () => {
      this.check_estructural();
    });
  }

  //Creo función para mostrar calidades de barandas tubulares en acero al carbono
  calidad_aceroInoxidableTub() {
    // Genero elementos HTML para selección de calidad de material
    let contenedor = document.createElement("div");
    contenedor.classList.add("container", "pt-3");
    contenedor.innerHTML = `
    <div class="row d-flex align-items-center">
        <div class="col-12 align-items-start">
          <h6>Selecciona la calidad:</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_sinCostura_inox"
            />
            <label class="form-check-label" for="radio_sinCostura_inox"
              >Sin Costura (A312)</label
            >
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_conCostura_inox"
            />
            <label class="form-check-label" for="radio_conCostura_inox"
              >Con Costura (A554)</label
            >
          </div>
        </div>
      </div>`;
    calidadBarandas.appendChild(contenedor);
    //Creo eventos sobre radios
    /**Sobre botón radio "Sin Costura Inox."*/
    let radio_sinCostura_inox = document.getElementById(
      "radio_sinCostura_inox"
    );
    radio_sinCostura_inox.addEventListener("click", () => {
      ejecutar.check_sinCostura_inox();
    });
    /**Sobre botón radio "Con Costura Inox."*/
    let radio_conCostura_inox = document.getElementById(
      "radio_conCostura_inox"
    );
    radio_conCostura_inox.addEventListener("click", () => {
      ejecutar.check_conCostura_inox();
    });
  }

  //Creo función para mostrar calidades de barandas angulares en acero al carbono
  calidad_aceroInoxidableAng() {
    // Genero elementos HTML para selección de calidad de material
    let contenedor = document.createElement("div");
    contenedor.classList.add("container", "pt-3");
    contenedor.innerHTML = `
    <div class="row d-flex align-items-center">
        <div class="col-12 align-items-start">
          <h6>Selecciona la calidad:</h6>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="form-check form-switch">
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="radio_estructuralInox"
            />
            <label class="form-check-label" for="radio_estructuralInox"
              >Estructural (A240)</label
            >
          </div>
        </div>
      </div>`;
    calidadBarandas.appendChild(contenedor);
    //Creo eventos sobre radios
    /**Sobre botón radio "Estructural"*/
    let radio_estructuralInox = document.getElementById(
      "radio_estructuralInox"
    );
    radio_estructuralInox.addEventListener("click", () => {
      this.check_estructuralInox();
    });
  }

  //Creo función para resetear contenedores "Materiales"
  material_remover() {
    materialBarandas.innerHTML = "";
  }

  //Creo función para resetear contenedores "Tipo"
  tipo_remover() {
    tipoBarandas.innerHTML = "";
    flag_tubular = false;
    flag_angular = false;
  }

  //Creo función para resetear contenedores "Calidad"
  calidad_remover() {
    calidadBarandas.innerHTML = "";
    flag_usoMecanico = false;
    flag_sinCostura = false;
    flag_conCostura = false;
    flag_sinCostura_inox = false;
    flag_conCostura_inox = false;
    flag_estructural = false;
    flag_estructuralInox = false;
  }

  //Creo función sobre check Uso Mecánico
  check_usoMecanico() {
    if (flag_usoMecanico == false) {
      flag_usoMecanico = true;
      this.validar_confirmar();
    } else {
      flag_usoMecanico = false;
      this.validar_confirmar();
    }
  }
  /**Sin Costura*/
  check_sinCostura() {
    if (flag_sinCostura == false) {
      flag_sinCostura = true;
      this.validar_confirmar();
    } else {
      flag_sinCostura = false;
      this.validar_confirmar();
    }
  }
  /**Con Costura*/
  check_conCostura() {
    if (flag_conCostura == false) {
      flag_conCostura = true;
      this.validar_confirmar();
    } else {
      flag_conCostura = false;
      this.validar_confirmar();
    }
  }
  /**Sin Costura Inox.*/
  check_sinCostura_inox() {
    if (flag_sinCostura_inox == false) {
      flag_sinCostura_inox = true;
      this.validar_confirmar();
    } else {
      flag_sinCostura_inox = false;
      this.validar_confirmar();
    }
  }
  /**Con Costura Inox.*/
  check_conCostura_inox() {
    if (flag_conCostura_inox == false) {
      flag_conCostura_inox = true;
      this.validar_confirmar();
    } else {
      flag_conCostura_inox = false;
      this.validar_confirmar();
    }
  }
  /**Estructural*/
  check_estructural() {
    if (flag_estructural == false) {
      flag_estructural = true;
      this.validar_confirmar();
    } else {
      flag_estructural = false;
      this.validar_confirmar();
    }
  }
  /**Estructural Inox */
  check_estructuralInox() {
    if (flag_estructuralInox == false) {
      flag_estructuralInox = true;
      this.validar_confirmar();
    } else {
      flag_estructuralInox = false;
      this.validar_confirmar();
    }
  }

  //Defino funciones para habilitar botón Continuar
  /**Validación global */
  validar_confirmar() {
    if (this.validar_confirmar_calidad() && this.validar_confirmar_tipo()) {
      botones.habilitar_confirmar();
      return true;
    } else {
      botones.deshabilitar_confirmar();
      return false;
    }
  }
  /**Validación sección calidad */
  validar_confirmar_calidad() {
    if (
      flag_usoMecanico &&
      flag_sinCostura == false &&
      flag_conCostura == false
    ) {
      return true;
    } else if (
      flag_usoMecanico == false &&
      flag_sinCostura &&
      flag_conCostura == false
    ) {
      return true;
    } else if (
      flag_usoMecanico == false &&
      flag_sinCostura == false &&
      flag_conCostura
    ) {
      return true;
    } else if (flag_sinCostura_inox && flag_conCostura_inox == false) {
      return true;
    } else if (flag_sinCostura_inox == false && flag_conCostura_inox) {
      return true;
    } else if (flag_estructural) {
      return true;
    } else if (flag_estructuralInox) {
      return true;
    } else {
      return false;
    }
  }
  /**Validación sección tipo */
  validar_confirmar_tipo() {
    if (flag_tubular && flag_angular == false) {
      return true;
    } else if (flag_tubular == false && flag_angular) {
      return true;
    } else {
      return false;
    }
  }

  //Defino función que construye el objeto Baranda
  guardarBaranda() {
    let material = "";
    let calidad = "";
    let tipo = "";
    /**Asigno material */
    if (flag_aoco) {
      material = "Acero al carbono";
    } else if (flag_inox) {
      material = "Acero inoxidable 304";
    }
    /**Asigno calidad */
    if (flag_usoMecanico) {
      calidad = "Uso mecánico";
    } else if (flag_sinCostura) {
      calidad = "Sin Costura (A106 Gr.B)";
    } else if (flag_conCostura) {
      calidad = "Con Costura (A53 Gr.B)";
    } else if (flag_sinCostura_inox) {
      calidad = "Sin Costura (A312)";
    } else if (flag_conCostura_inox) {
      calidad = "Con Costura (A554)";
    } else if (flag_estructural) {
      calidad = "Estructural (A36 / F24)";
    } else if (flag_estructuralInox) {
      calidad = "Estructural (A240)";
    }
    /**Asigno tipo */
    //Operador avanzado
    flag_tubular ? (tipo = "Tubular") : (tipo = "Angular");
    /**Genero Objeto */
    let baranda = new Baranda(material, calidad, tipo);
    const datosBaranda = JSON.stringify(baranda);
    sessionStorage.setItem("baranda", datosBaranda);
    //Genero elementos HTML para alerta de éxito
    let alerta = document.createElement("div");
    alerta.classList.add("alert", "alert-success");
    alerta.innerHTML = `
    <h4 class="alert-heading">¡Excelente!</h4>
    <p class="mb-0">Se han cargado con éxito los siguientes datos:</p>
    <p class="mb-0">Material: ${baranda.material} | Tipo: ${baranda.tipo} | Calidad: ${baranda.calidad}</p>
    <hr>
    `;
    alertaSeleccionBaranda.appendChild(alerta);
    //Oculto opciones
    this.material_remover();
    this.tipo_remover();
    this.calidad_remover();
    // Habilito botón editar
    botones.habilitar_editar();
    // Deshabilito botón confirmar
    botones.deshabilitar_confirmar();
  }

  //Defino función para habilitar selector de secciones
  mostrar_secciones() {
    if (flag_tubular) {
      secciones_tubulares.classList.remove("hidden");
      secciones_tubulares.classList.add("visible");
      if (flag_inox) {
        let selector_acabadoTub = document.getElementById("selector_acabadoTub");
        selector_acabadoTub.innerHTML = `
        <option selected>Seleccionar el acabado superficial:</option>
              <option value="natural" class="drop-down_tubular">Natural</option>`
      }
    } else if (flag_angular) {
      secciones_angulares.classList.remove("hidden");
      secciones_angulares.classList.add("visible");
      if (flag_inox) {
        let selector_acabadoAng = document.getElementById("selector_acabadoAng");
        selector_acabadoAng.innerHTML = `
        <option selected>Seleccionar el acabado superficial:</option>
              <option value="natural" class="drop-down_tubular">Natural</option>`
      }
    }
  }
}
