document.querySelector("#procesadoresintel").addEventListener("click", traerprocesadoresintel);
let contenido = document.querySelector('#cardproducto')

function traerprocesadoresintel() {
    fetch('procesadoresintel.json')
        .then(res => res.json())
        .then(datos => {
            card(datos)
        })
}
function card(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `

    
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
        <h5 class="card-title pt-2 text-center text-primary">${valor.nombre}</h5>
        <img src="${valor.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-white-50 description">${valor.descripcion}</p>
            <h5 class="text-primary">Precio: <span class="precio">$ ${valor.precio}</span></h5>
            <div class="d-grid gap-2">
                <button class="btn btn-primary button">Añadir a Carrito</button>
            </div>
        </div>
      </div>
    </div>


  `
    }
}
/*##########################################################################################################*/ 
document.querySelector("#procesadoresamd").addEventListener("click", traerprocesadoresamd);


function traerprocesadoresamd() {
    fetch('procesadoresamd.json')
        .then(res => res.json())
        .then(datos => {
            card(datos)
        })
}
function card(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `
    
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
        <h5 class="card-title pt-2 text-center text-primary">${valor.nombre}</h5>
        <img src="${valor.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-white-50 description">${valor.descripcion}</p>
            <h5 class="text-primary">Precio: <span class="precio">$ ${valor.precio}</span></h5>
            <div class="d-grid gap-2">
                <button class="btn btn-primary button">Añadir a Carrito</button>
            </div>
        </div>
      </div>
    </div>


  `
    }
}
/*##########################################################################################################*/
document.querySelector("#videonvidia").addEventListener("click", traerplacasvideonvidia);


function traerplacasvideonvidia() {
    fetch('placasvideonvidia.json')
        .then(res => res.json())
        .then(datos => {
            card(datos)
        })
}
function card(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `
    
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
        <h5 class="card-title pt-2 text-center text-primary">${valor.nombre}</h5>
        <img src="${valor.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-white-50 description">${valor.descripcion}</p>
            <h5 class="text-primary">Precio: <span class="precio">$ ${valor.precio}</span></h5>
            <div class="d-grid gap-2">
                <button class="btn btn-primary button">Añadir a Carrito</button>
            </div>
        </div>
      </div>
    </div>


  `
    }
}
/*##########################################################################################################*/
document.querySelector("#videoamd").addEventListener("click", traerplacasvideoamd);


function traerplacasvideoamd() {
    fetch('placasvideoamd.json')
        .then(res => res.json())
        .then(datos => {
            card(datos)
        })
}
function card(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `
    
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
        <h5 class="card-title pt-2 text-center text-primary">${valor.nombre}</h5>
        <img src="${valor.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-white-50 description">${valor.descripcion}</p>
            <h5 class="text-primary">Precio: <span class="precio">$ ${valor.precio}</span></h5>
            <div class="d-grid gap-2">
                <button class="btn btn-primary button">Añadir a Carrito</button>
            </div>
        </div>
      </div>
    </div>


  `
    }
}
/*##########################################################################################################*/
document.querySelector("#memoriasram").addEventListener("click", traermemoriasram);


function traermemoriasram() {
    fetch('memoriasram.json')
        .then(res => res.json())
        .then(datos => {
            card(datos)
        })
}
function card(datos) {
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `
    
    <div class="col d-flex justify-content-center mb-4">
      <div class="card shadow mb-1 bg-dark rounded" style="width: 20rem;">
        <h5 class="card-title pt-2 text-center text-primary">${valor.nombre}</h5>
        <img src="${valor.img}" class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text text-white-50 description">${valor.descripcion}</p>
            <h5 class="text-primary">Precio: <span class="precio">$ ${valor.precio}</span></h5>
            <div class="d-grid gap-2">
                <button class="btn btn-primary button">Añadir a Carrito</button>
            </div>
        </div>
      </div>
    </div>


  `
    }
}