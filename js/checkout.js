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
return localStorage.removeItem('MiCompra')
})