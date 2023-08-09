const tableBody = document.querySelector('tbody')


function crearFilaCarrito(producto){
        return ` <tr>
        <td class="class-table-number">${producto.id}</td>
        <td class="emoji-image">${producto.imagen}</td>
        <td>${producto.nombre}</td>
        <td>$ ${producto.precio}</td>
    </tr>`
}


function cargarListaCarrito(array){
        recuperarCarritoLocalStorage()
        tableBody.innerHTML = ""
        if(array.length>0){
            array.forEach((producto)=> {tableBody.innerHTML += crearFilaCarrito(producto)})
        }else{
            tableBody.innerHTML = ""
        }
}
cargarListaCarrito(carrito)

const botonBorrar = document.querySelector('button#borrarCarro')
botonBorrar.addEventListener('click', ()=> {
    Swal.fire({
        icon: 'info',
        title: '¿Deseas borrar el carrito?',
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: 'Borrar',
        denyButtonText: `Cancelar`,
        }).then((result) => {        
        if (result.isConfirmed) {
            Swal.fire('Borrado con éxito', '', 'success')
            localStorage.removeItem('MiCompra')
            tableBody.innerHTML = ""
        } else if (result.isDenied) {
            Swal.fire('No borraste el carrito', '', 'info')
        }
    })
})


const botonComprar = document.querySelector('button#comprarProd')
botonComprar.addEventListener('click', ()=>{
    Swal.fire({
        icon: 'info',
        title: '¿Deseas confirmar la compra?',
        showConfirmButton: true,
        showDenyButton: true,
        confirmButtonText: 'Confirmar',
        denyButtonText: `Cancelar`,
        }).then((result) => {        
        if (result.isConfirmed) {
            Swal.fire('Gracias por tu compra 😄', '', 'success')
            localStorage.removeItem('MiCompra')
            tableBody.innerHTML = ""
        } else if (result.isDenied) {
            Swal.fire('Cancelaste tu compra', '', 'cancel')
        }
    })
})
