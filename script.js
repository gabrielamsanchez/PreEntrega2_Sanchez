alert("Bienvenido/a nuestra tienda de plantas")

let productos = [
    { id: 1, nombre: "Monstera", categoria: "exterior", stock: 5, precio: 13000 },
    { id: 2, nombre: "Calathea", categoria: "exterior", stock: 7, precio: 15500 },
    { id: 3, nombre: "Limonero", categoria: "exterior", stock: 4, precio: 17800 },
    { id: 4, nombre: "Gomero", categoria: "exterior", stock: 9, precio: 11000 },
    { id: 5, nombre: "Zebrinha", categoria: "interior", stock: 4, precio: 7000 },
    {   id: 6, nombre: "Philodendron", categoria: "interior", stock: 7, precio: 5300 },
]

let mensaje = "Productos disponibles:\n"
productos.forEach(producto => mensaje = mensaje + producto.id + " - " + producto.nombre + "\n")
alert(mensaje)



let opcion = Number(prompt("Opcion 1: categoria plantas de interior\n Opcion 2: categoria plantas de exterior"))
let productosFiltrados

if (opcion === 1) {
    productosFiltrados = filtrar(productos, "categoria", "interior")
} else if (opcion === 2) {
    productosFiltrados = filtrar(productos, "categoria", "exterior")
}
function filtrar(lista, propiedad, valorPropiedad) {
    return lista.filter(producto => producto[propiedad] === valorPropiedad)
}

for (const producto of productosFiltrados){
    alert(producto.nombre)
}