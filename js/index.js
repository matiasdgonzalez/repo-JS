/*
    ✔Algoritmo con un condicional
    ✔Algoritmo con un ciclo iterativo
    ✔Simulador interactivo
    ✔Utilizar funciones
*/
let usuario = prompt("Hola! Ingresá tu nombre de usuario para que podamos reconocerte😁")
if (usuario === "" || usuario == null){
    console.warn("No pudimos reconocerte! Por favor, recargá la página e ingresa tu usuario.")
}

else{
    console.log("¡Bienvenid@ "+ usuario + "!")
}

function elegirProducto() {
    let respuesta = confirm("¿Deseas conocer algún precio?")
    
    if (respuesta === true){
        let producto = prompt("Ingrese el número del ítem a comprar: ")
        seleccionadorProducto(producto)   
    }

    else{
        console.log("¡Esperamos tu compra!❤")
    }
}

function mostrarPromociones(){
    for (i=2; i<=4; i++){
        console.log("Llevando "+ i + " productos tenes un " +i*5 + "% de descuento!")
    }
    console.log("A partir de 5 productos en adelante, el descuento sigue siendo del 20%.")
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

        case "6": 
            console.warn("Estamos en proceso de construcción del resto de nuestro sitio web. Disculpe las molestias🙏")
            break;

        default:
            console.error("Elegiste un producto que no está en la lista.")
            break;
    }
}


