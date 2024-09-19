// const nombre = "Tablet"
// const precio = 300
// const disponible = true
console.warn("----------------------------)");
const producto = {
    modelo: "ipad",
    costo_compra : 11500.25,
    costo_venta:  15400,
    disponible : true,
    SKU: Symbol("123456"),
    colores: ["Blanco","Negro","Rosa","Amarillo","azul"]
}


console.log(producto)
console.table(producto)

console.log(producto.modelo)
console.log(producto.costo_venta)
console.log(producto.disponible)
 //accseder a las propiedades de un objeto
 console.warn("Leyendo las prropiedades de un objeto y sus tipos d dato/n");
 console.log(`Nombre del producto: ${producto.modelo}  que es de tipo ${typeof(producto)}`);
 console.log(`El costo del producto es: ${producto.costo_compra}  que es de tipo ${typeof(costo_compra)}`);
 console.log(`Nombre del producto: ${producto.modelo}  que es de tipo ${typeof(producto)}`);
 console.log(`Nombre del producto: ${producto.modelo}  que es de tipo ${typeof(producto)}`);
 console.log(`Nombre del producto: ${producto.modelo}  que es de tipo ${typeof(producto)}`);
 console.log(`Nombre del producto: ${producto.modelo}  que es de tipo ${typeof(producto)}`);


/*console.log(producto)
console.table(producto)
console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

// Destructuring

const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

// Object Literal Enhacement

const autenticado = true
const usuario = "Jonathan"

const nuevoObjeto = {
    autenticado,
    usuario
}

console.table(nuevoObjeto) */