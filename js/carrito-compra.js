class Compra{
    constructor(carritoDeCompras){
        this.carrito = carritoDeCompras
    }
    obtenerSubtotal(){
        if (this.carrito.length > 0){
            return this.carrito.reduce((acc,prod) => acc + prod.precio, 0)
        }
    }
}

function guardarEnCarrito(){
    if(carrito.length>0){
        localStorage.setItem("MiCompra", JSON.stringify(carrito))
    }
}

function recuperarCarritoLocalStorage(){
    if (localStorage.getItem("MiCompra")){
        return JSON.parse(localStorage.getItem("MiCompra"))
    }else{
        return []
    }
}

const carrito = recuperarCarritoLocalStorage()