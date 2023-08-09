const arrayProductos=   [{id:1,imagen: "💍" ,nombre: "Anillo de plata", precio: 2600},
                        {id:2, imagen: "💍",nombre: "Anillo de oro", precio: 3500},
                        {id:3, imagen: "📿",nombre: "Collar de plata", precio: 3600},
                        {id:4, imagen: "📿",nombre: "Collar de oro", precio: 4100},
                        {id:5, imagen: "💎",nombre: "Aros de acero quirúrgico", precio: 1600},
                        {id:6, imagen: "💎",nombre: "Aros de plata", precio: 2300},
                        {id:7, imagen: "💎",nombre: "Aros de oro", precio: 3000},
                        {id:8, imagen: "✊", nombre: "Esclava de acero quirúrgico", precio: 6500},
                        {id:9, imagen: "📿", nombre: "Choker estilizado", precio: 5000},
                        {id:10, imagen: "👙", nombre: "Conjunto lencería", precio: 16000}
]


const tablaOpciones = document.querySelector("#tablaOpciones")
const inputBuscar = document.querySelector("#inputSearch")
const URL = 'js/prendas.json'

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
        boton.addEventListener("click", ()=>{
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
function cargarProductos(array){
    tablaOpciones.innerHTML = ""
    if(array.length>0){
        array.forEach((producto)=> {tablaOpciones.innerHTML += crearFilaHTML(producto)})
        activarClickEnBotonesProductos()
    }else{
    }
}

inputBuscar.addEventListener('search',()=>{
    if(inputBuscar.value.trim() !== ""){
        let arrayResultante = arrayProductos.filter((producto) => producto.nombre.toLowerCase().includes(inputBuscar.value.trim().toLowerCase()))
        cargarProductos(arrayResultante)
    }else{
        cargarProductos(arrayProductos)
    }
})

cargarProductos(arrayProductos)

function obtenerPrendas(){
    fetch(URL)
    .then((response)=>response.json())
    .then((data) => arrayProductos.push(...data))
    .then(()=> cargarProductos(arrayProductos))
    .catch((error) => container.innerHTML=retornarCardError())
}
obtenerPrendas()