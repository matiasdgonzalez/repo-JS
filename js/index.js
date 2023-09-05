const tablaOpciones = document.querySelector("#tablaOpciones")
const inputBuscar = document.querySelector("#inputSearch")
const ACC= 'js/accesorios.json'

let arrayProductos = []

function crearFilaHTML(producto){
    return ` <tr>
    <td class="class-table-number">${producto.id}</td>
    <td class="emoji-image">${producto.imagen}</td>
    <td>${producto.nombre}</td>
    <td>$ ${producto.precio}</td>
    <td><button id="${producto.id}" class="button button-outline button-big-emoji">🛒</button></td>
</tr>`
}

function activarClickEnBotonesProductos(){
    const botones = document.querySelectorAll("button.button-outline.button-big-emoji")
    botones.forEach((boton) => {
        boton.addEventListener("click", (e)=>{
            console.log(e)
            let producto = arrayProductos.find((prod)=> prod.id === parseInt(boton.id))
            carrito.push(producto)
            Swal.fire({
                icon: 'success',
                title: '¡Agregado correctamente!',
                text: 'Agregaste ' +producto.nombre+ " al carrito",
            })
            guardarEnCarrito() 
        })
})

}
function cargarProductos(array) {
    if (tablaOpciones) {
        tablaOpciones.innerHTML = ""
        if (array.length > 0) {
            array.forEach((producto) => { tablaOpciones.innerHTML += crearFilaHTML(producto) })
            activarClickEnBotonesProductos()
        }
    }
}

if(inputBuscar){
inputBuscar.addEventListener('search',()=>{
    if(inputBuscar.value.trim() !== ""){
        let arrayResultante = arrayProductos.filter((producto) => producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarProductos(arrayResultante)
    }else{
        cargarProductos(arrayProductos)
    }
})
}


function obtenerPrendas(){
    fetch(ACC)
    .then((response)=>{
        return response.json()
    })
    .catch((error) => console.error("Se ha producido un error al cargar los productos: "+ error))
    .then((data) => {
        arrayProductos.push(...data)
        cargarProductos(arrayProductos)
    })
    .catch((error) => console.error("Se ha producido un error al cargar los productos: "+ error))
}
obtenerPrendas()