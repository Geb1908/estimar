class gestionarElementos {
  //Creo función para mostrar los elementos en la página
  mostrarElementos() {
    //Modelo los elementos

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((resultado) => {
        elementos = resultado.elementos;

        //Recorro el arreglo y creo una tarjeta para cada elemento
        for (let i = 0; i < elementos.length; i++) {
          let elemento = elementos[i];
          this.crearTarjetas(elemento);
        }
      });
  }

  //Defino función creadora de cajas
  crearTarjetas(elemento) {
    let href = elemento.href;
    let js = elemento.js;
    //Selecciono el contenedor de los elementos y aseguro su contenido vacío
    const containerElementos = document.getElementById("container__elementos");
    //Creo el contenedor de las cartas
    let contenedor = document.createElement("div");
    contenedor.classList.add("card");
    contenedor.setAttribute("id", "card_" + elemento.id);
    contenedor.style.width = "16rem";
    contenedor.innerHTML = `
      <img src="${elemento.imagen}" class="card-img-top img-fluid mx-auto pt-2" alt="Imagen de+${elemento.nombre}" style="width: 266x; height: 200px;" />
      <div class="card-body d-flex flex-column">
        <div style="height: 125px;">
          <h5 class="card-title" id="title_${elemento.id}">${elemento.nombre}</h5>
          <p class="card-text">${elemento.descripcion}</p>
        </div>
        <a href="javascript:${js}(${elemento.id})" class="btn btn-primary align-self-center" style="width: 60%;" id="btn-selec_${elemento.id}">Seleccionar
        </a>
        <a href="${href}" class="btn btn-success align-self-center mt-2 disabled" style="width: 60%;" id="btn-cont_${elemento.id}">Continuar
        </a>
      </div>`;
    containerElementos.appendChild(contenedor);
  }
}
