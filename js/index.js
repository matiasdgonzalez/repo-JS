/*
    ✔Algoritmo con un condicional
    ✔Algoritmo con un ciclo iterativo
    Simulador interactivo
    ✔Utilizar funciones
*/

function elegirProducto() {
    let respuesta = confirm("¿Deseas conocer algún precio?")
    
    if (respuesta === true){
        let producto = prompt("Ingrese el número del ítem a comprar: ")
        seleccionadorProducto(producto)
    }

    else{
        console.log("¡Esperamos tu consulta!❤")
    }
}

function mostrarPromociones(){
    for (i=2; i<=4; i++){
        console.log("Llevando "+ i + " productos tenes un " +i*5 + "% de descuento!")
    }
}

function seleccionadorProducto(opcion){

    switch(opcion){
        case "1":
            console.warn("El precio de la bolsa de caramelos surtidos es de $200")
            break;

        case "2":
            console.warn("El precio de la yerba 1kg es de $600")
            break;

        case "3":
            console.warn("El precio del paquete de arroz es es de $350")
            break;

        case "4":
            console.warn("El precio del kilo de nalga es de $800! Oferta válida hasta el 02/07.")
            break;

        case "5":
            console.warn("El precio del bolson surtido es de $700")
            break;

        default:
            console.error("Elegiste un producto que no está en la lista.")
            break;
    }
}


