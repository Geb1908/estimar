class gestionarResumen {
  crearResumen() {
    //Recupero valores de sessionStorage
    //Datos de la obra
    const obra = JSON.parse(sessionStorage.getItem("obra"));
    //Elección del tipo de baranda
    const baranda = JSON.parse(sessionStorage.getItem("baranda"));
    const seccion = JSON.parse(sessionStorage.getItem("seccion"));
    //Cómputo de materiales
    const computo = JSON.parse(sessionStorage.getItem("BOM"));
    //Pesos unitarios
    const pesoBaranda = JSON.parse(sessionStorage.getItem("pesoBaranda"));
    //Acabado superficial
    const acabado = JSON.parse(sessionStorage.getItem("acabado"));

    //Aplico desestructuración para obtener variables
    const { material, calidad, tipo } = baranda;
    const { empresa, cliente, proyecto, lugar } = obra;
    const {
      cartelas,
      bulones,
      parantes,
      pasamanos,
      guardarrodilla,
      guardapie,
      extremos,
      perfil,
    } = computo;

    //Precio de materiales
    const precioPerfil = JSON.parse(sessionStorage.getItem("precioPerfil"));
    let precioCartela = 0;
    material == "ACERO AL CARBONO" ? (precioCartela = 3) : (precioCartela = 10);
    let precioBul = 2.5;
    material == "ACERO AL CARBONO" ? (precioBul = 2.5) : (precioBul = 7.5);
    let precioGuardapie = 0;
    material == "ACERO AL CARBONO"
      ? (precioGuardapie = 10)
      : (precioGuardapie = 30);
    let precioAcabado = 0;
    if (acabado == "pintado") {
      precioAcabado = 1.15;
    } else if (acabado == "galvanizado") {
      precioAcabado = 0.8;
    }

    //Precio de mano de obra
    const precioMO = 18;
    //Índice MO
    const barandaHH = 10;
    const hh = Math.ceil(parseInt(pesoBaranda) / barandaHH);
    //Tasa de cambio ARS/USD
    const ratio = JSON.parse(sessionStorage.getItem("ratio"));

    //Defino variables para utilizar librería Luxon
    const DateTime = luxon.DateTime;
    const fecha = DateTime.now();

    //Configuro el formato de la moneda
    const f = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "ARS",
      minimumFractionDigits: 2,
    });

    //Calculo los precios
    const costoCartelas = cartelas * precioCartela * ratio;
    const costoBulones = bulones * precioBul * ratio;
    const costoGuardapie = (guardapie * precioGuardapie * ratio) / 1000;
    const costoPerfil = (perfil * precioPerfil * ratio) / 1000;
    const costoTotalMateriales =
      cartelas * precioCartela * ratio +
      bulones * precioBul * ratio +
      (guardapie * precioGuardapie * ratio) / 1000 +
      (perfil * precioPerfil * ratio) / 1000;
    const costoMO = precioMO * hh * ratio;
    const costoAcabado = precioAcabado * pesoBaranda * ratio;

    //Creo resumen de la estimación
    let resumen_ctn = document.getElementById("resumen_ctn");
    let resumen = document.createElement("div");
    resumen.classList.add("alert");
    resumen.classList.add("alert-secondary");
    resumen.innerHTML = `
    <!-- Sección costos -->
    <div class="row">
      <div class="col-xl-3 col-lg-6">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large"><i class="bi bi-wrench-adjustable"></i>
            </div>
            <div class="mb-4">
              <h5 class="card-title mb-0">Mano de obra</h5>
            </div>
              <div class="col-12 text-end">
                <span>${(
                  (costoMO * 100) /
                  (costoMO + costoTotalMateriales + costoAcabado)
                ).toFixed(2)}%</i>
                  </span>
                </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h3 class="d-flex align-items-center mb-0">
                      ${f.format(costoMO)}
                    </h3>
                  </div>
                </div>
                <div class="progress mt-1 " data-height="8" style="height: 8px;">
                  <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${
                    (costoMO * 100) /
                    (costoMO + costoTotalMateriales + costoAcabado)
                  }%;">
                  </div>
                </div>
              </div>
          </div>
        </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large"><i class="bi bi-bricks"></i></div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Materiales</h5>
              </div>
              <div class="col-12 text-end">
                <span>${(
                  (costoTotalMateriales * 100) /
                  (costoMO + costoTotalMateriales + costoAcabado)
                ).toFixed(2)}%</i></span>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h3 class="d-flex align-items-center mb-0">
                    ${f.format(costoTotalMateriales)}
                  </h3>
                </div>
              </div>
                <div class="progress mt-1 " data-height="8" style="height: 8px;">
                  <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${
                    (costoTotalMateriales * 100) /
                    (costoMO + costoTotalMateriales + costoAcabado)
                  }%;">
                  </div>
                </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large"><i class="bi bi-brush"></i></div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Trat. Superficial</h5>
              </div>
              <div class="col-12 text-end">
                <span>${(
                  (costoAcabado * 100) /
                  (costoMO + costoTotalMateriales + costoAcabado)
                ).toFixed(2)}%</i></span>
              </div>
                <div class="row align-items-center mb-2 d-flex">
                  <div class="col-8">
                    <h3 class="d-flex align-items-center mb-0">
                      ${f.format(costoAcabado)}
                      </h3>
                  </div>
                </div>
                <div class="progress mt-1 " data-height="8" style="height: 8px;">
                  <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: ${
                    (costoAcabado * 100) /
                    (costoMO + costoTotalMateriales + costoAcabado)
                  }%;"></div>
                </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-6">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large"><i class="bi bi-cart-check"></i></div>
              <div class="mb-4">
                <h5 class="card-title mb-0">Total</h5>
              </div>
              <div class="col-12 text-end">
                <span>100%</i></span>
              </div>
              <div class="row align-items-center mb-2 d-flex">
                <div class="col-8">
                  <h3 class="d-flex align-items-center mb-0">
                    ${f.format(costoMO + costoTotalMateriales + costoAcabado)}
                  </h3>
                </div>
              </div>
              <div class="progress mt-1 " data-height="8" style="height: 8px;">
                <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width:100%;"></div>
                    </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <!-- Sección tipo de cambio y datos del proyecto -->
    <div class="row pt-4">
      <div class="col-12 col-lg-3">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="bi bi-info-circle"></i>
            </div>
            <div class="mb-2">
              <h5 class="card-title mb-0">Información General</h5>
              <p class="card-title mb-0">Tipo de cambio</p>
              <hr>
            </div>
            <div class="col-12 text-end">
              <span>ARS/USD</i></span>
            </div>
            <div class="row align-items-center mb-1 d-flex">
              <div class="col-12">
                <h3 class="d-flex justify-content-end align-items-center mb-0">
                  ${ratio}
                </h3>
              </div>
              <div class="col-12">
                <p class="d-flex justify-content-end align-items-center mb-0">
                  ${fecha.toLocaleString(DateTime.DATETIME_MED)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-9">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="bi bi-card-text"></i>
            </div>
            <div class="mb-2">
              <h5 class="card-title mb-0">Datos del proyecto</h5>
              <br>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-lg-3">
                <span>Empresa</i></span>
              </div>
              <div class="col-lg-3">
                <span>Cliente</i></span>
              </div>
              <div class="col-lg-3">
                <span>Proyecto</i></span>
              </div>
              <div class="col-lg-3">
                <span>Lugar</i></span>
              </div>
            </div>
            <div class="row align-items-center mb-2 d-flex">
              <div class="col-lg-3">
                <h3 class="d-flex justify-content-start" align-items-center mb-0">
                  ${empresa}
                </h3>
              </div>
              <div class="col-lg-3">
                <h3 class="d-flex justify-content-start" align-items-center mb-0">
                  ${cliente}
                </h3>
              </div>
              <div class="col-lg-3">
                <h3 class="d-flex justify-content-start" align-items-center mb-0">
                  ${proyecto}
                </h3>
              </div>
              <div class="col-lg-3">
                <h3 class="d-flex justify-content-start" align-items-center mb-0">
                  ${lugar}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sección datos de baranda seleccionada -->
    <div class="row pt-4">  
      <div class="col-12 col-lg-6">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="bi bi-bag-check"></i>
            </div>
            <div class="mb-2">
              <h5 class="card-title mb-0">Baranda</h5>
              <p class="card-title mb-0">Seleccionada</p>
              <hr>
            </div>
            <div class="col-12 text-start">
              <span>Propiedades</i></span>
            </div>
            <div class="row align-items-center mb-1 d-flex">
              <div class="col-12">
                <h3 class="d-flex justify-content-end align-items-center mb-0">
                ${material} ${calidad} ${tipo} ${seccion}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-6">
        <div class="card l-bg-cherry">
          <div class="card-statistic-3 p-4">
            <div class="card-icon card-icon-large">
              <i class="bi bi-info-circle"></i>
            </div>
            <div class="mb-2">
              <h5 class="card-title mb-0">Peso baranda</h5>
              <p class="card-title mb-0">Total</p>
              <hr>
            </div>
            <div class="col-12 text-end">
              <span>kg</i></span>
            </div>
            <div class="row align-items-center mb-1 d-flex">
              <div class="col-12">
                <h3 class="d-flex justify-content-end align-items-center mb-0">
                  ${pesoBaranda.toFixed(2)}
                </h3>
              </div>
              <div class="col-12">
                <p class="d-flex justify-content-end align-items-center mb-2">
                    estimado
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Sección listado de materiales -->
    <div class="row text-center pt-4">
        <h3>LISTADO DE MATERIALES</h3>
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col-4">Descripción</th>
              <th scope="col">Cantidad</th>
              <th scope="col-5">Tipo</th>
              <th scope="col">Costo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cartelas</td>
              <td>${cartelas.toFixed(2)} kg</td>
              <td>Chapa esp. 7,93 mm</td>
              <td>${f.format(costoCartelas)}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Bulones</td>
              <td>${bulones} un</td>
              <td>Bul. Hex. Ø5/8" x 1-3/4" A325 C/TCA A194 2H BI. DORADO</td>
              <td>${f.format(costoBulones)}</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Perfil</td>
              <td>${(perfil / 1000).toFixed(2)} m</td>
              <td>${seccion} ${calidad}</td>
              <td>${f.format(costoPerfil)}</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Guardapie</td>
              <td>${(guardapie / 1000).toFixed(2)} m</td>
              <td>PL. 4" x 1/4"</td>
              <td>${f.format(costoGuardapie)}</td>
            </tr>
          </tbody>
        </table>
      </div>`;
    let uocra = document.createElement("div");
    uocra.classList.add("alert");
    uocra.classList.add("alert-warning");
    uocra.innerHTML = `
    <div class = "row">
      <div class = "col">
        <p>*Base Mano de Obra: <strong> UOCRA - CONVENIO 76/75</strong></p>
        <p>**Los valores informados son meramente referenciales y no incluyen ningún tipo de recargo ni impuesto</p>
      </div>
    </div>`;
    resumen_ctn.appendChild(resumen);
    resumen_ctn.appendChild(uocra);
  }
}
