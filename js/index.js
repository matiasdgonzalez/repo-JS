const carrito=[]

const arrayProductos=   [{id:1, nombre: "Anillo de plata", precio: 2600},
                        {id:2, nombre: "Anillo de oro", precio: 3500},
                        {id:3, nombre: "Collar de plata", precio: 3600},
                        {id:4, nombre: "Collar de oro", precio: 4100},
                        {id:5, nombre: "Aros de acero quirúrgico", precio: 1600},
                        {id:6, nombre: "Aros de plata", precio: 2300},
                        {id:7, nombre: "Aros de oro", precio: 3000}
]


let usuario = prompt("Hola! Ingresá tu nombre de usuario para que podamos reconocerte😁")
if (usuario === "" || usuario == null){
    console.warn("No pudimos reconocerte! Por favor, recargá la página e ingresa tu usuario.")
}else{
    console.log("¡Bienvenid@ "+ usuario + "!")
}

function buscarProducto(codigo){
    let resultado = arrayProductos.find((prod) => prod.id === parseInt(codigo))
    return resultado
}

function finalizarCompra(){
    const shoppingcart = new Compra(carrito)
    console.log(`El costo total de su compra es de $ ${shoppingcart.obtenerSubtotal()}. Muchas gracias por su compra😊`)
    
}

function comprar(){
    let codigo = parseInt(prompt("Ingresa el código del accesorio que quieras comprar"))
    let accesorio = buscarProducto(codigo)
    if (accesorio !== undefined){
        carrito.push(accesorio)
        alert(`${accesorio.nombre.toUpperCase()} fue agregado al carrito correctamente!`)
        let respuesta = confirm ("Deseas elegir otro accesorio?")
        if (respuesta === true){
            comprar()
        }else{
            console.table(carrito)
            finalizarCompra()
        }
    }  
    else{
        alert("No se encontró un código válido. Refresque la página para poder comenzar de nuevo con su compra")
    }
}