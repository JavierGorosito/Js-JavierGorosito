function ProductoBase (nombre, stock, precio, descuento, descuentoPorCantidad) {
    this.nombre = nombre;
    this.stock = stock;
    this.precio = precio;
    this.descuento = descuento;
    this.descuentoPorCantidad = descuentoPorCantidad;
    this.calcularTotal = function (cantidad){
        return cantidad * this.precio
    }
    this.calcularTotalConDescuento = function (cantidad){
        return cantidad * this.precio * (1 - this.descuento/100) 
    }
    this.descontarStock = function (cantidad){
        this.stock = this.stock - cantidad
    }
}

const productos = [
    {
        nombre: `Cerveza`, 
        cantidad: 100, 
        precio: 120, 
        descuento: 10,
        descuentoPorCantidad: 40
    }, 
    {
        nombre: `Viandas Light`, 
        cantidad: 100, 
        precio: 350, 
        descuento: 5,
        descuentoPorCantidad: 50
    },
]

let listaDeProductos = [];

for (let index = 0; index < productos.length; index++) {
    const producto = new ProductoBase(
        productos[index].nombre, 
        productos[index].cantidad, 
        productos[index].precio, 
        productos[index].descuento,
        productos[index].descuentoPorCantidad
    );

    listaDeProductos.push(producto);
}

let userProducts = {cervezas: 0, vinos: 0}

let userInput

let masProductos = 'no';
let userCarrito;
let userCantidad;
let total

function carrito (){
    userCarrito = prompt('Tenemos Cervezas, Vinos, que te Gustaria?');
    userCantidad = parseInt(prompt ('Cuantas queres que te llevemos?'));

    if(userCarrito.toLowerCase() == 'cervezas'){
        if(userCantidad <= productos.cervezas){
            productos.cervezas = productos.cervezas - userCantidad; 
            userProducts.cervezas +=  userCantidad
            alert (`Gracias por comprar ${userCantidad} ${userCarrito}`);
        } else {
            alert(`No tenemos esa Cantidad de ${userCarrito}`);
        };
    }
    if(userCarrito.toLowerCase() == 'vinos'){
        if(userCantidad <= productos.vinos){
            productos.vinos = productos.vinos - userCantidad; 
            userProducts.vinos += userCantidad
            alert (`Gracias por comprar ${userCantidad} ${userCarrito}`);
        } else {
            alert(`No tenemos esa Cantidad de ${userCarrito}`);
        };
    }
}
do {
   userInput = prompt(`Hola, Bienvenido a Tony Delivery te gustaria que te llevemos bebidas a tu Casa Fiersta? Si o No`);
    
} while (!(userInput.toLowerCase() == `no`|| userInput.toLowerCase() == `si`));


if (userInput.toLowerCase() == "si") {
    carrito()

    do {
        masProductos = prompt(`Necesita algo mas?`);
        if ( masProductos.toLowerCase() == `si`){
            carrito();
        }
    } while (masProductos.toLowerCase() !== `no`);


    alert(`Compraste ${userProducts.cervezas ? `${userProducts.cervezas} cervezas`  : ''} ${userProducts.vinos ? `${userProducts.vinos} Vinos`  : ''} `)
}

if (userInput.toLowerCase() == "no"){
    alert('Aca estaremos cuando necesites diversion');
}