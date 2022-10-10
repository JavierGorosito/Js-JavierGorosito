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
        nombre: `Heineken`, 
        cantidad: 100, 
        precio: 150, 
        descuento: 10,
        descuentoPorCantidad: 40
    }, 
    {
        nombre: `Quilmes`, 
        cantidad: 100, 
        precio: 100, 
        descuento: 5,
        descuentoPorCantidad: 50
    },  
    {
        nombre: `Imperial`, 
        cantidad: 100, 
        precio: 130, 
        descuento: 20,
        descuentoPorCantidad: 30
    }, 
    {
        nombre: `Andes`, 
        cantidad: 100, 
        precio: 120, 
        descuento: 10,
        descuentoPorCantidad: 60
    }, 
    {
        nombre: `Stella Artois`, 
        cantidad: 100, 
        precio: 140, 
        descuento: 10,
        descuentoPorCantidad: 45
    }, 
    {
        nombre: `corona`, 
        cantidad: 100, 
        precio: 140, 
        descuento: 20,
        descuentoPorCantidad: 20
    } 
];

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

function carrito (){
    let producto;

    function manejarProducto() { 

        const productoSelecionado = prompt(`Cuales serian tu preferencia de marcas de cervezas? Tenemos Heineken, Stella Artois, Quilmes, Andes, Imperial, Corona`)


        listaDeProductos.forEach((prod) => {
            if(prod.nombre.toLowerCase() === productoSelecionado.toLowerCase()){
                producto = prod;
            }
        })

        if (producto) {
            let cantidad;

            const manejarCantidad = function () {
                cantidad = parseInt(prompt(`Que Cantidad necesitas? Tienes un descuento del ${producto.descuento}% si adquiere ${producto.descuentoPorCantidad} o mas unidades!`))
                if(cantidad > producto.stock) {
                    alert(`No tenemos esa Cantidad`)
                } else{
                    if(cantidad > producto.descuentoPorCantidad){
                        alert(`Es un total de ${producto.calcularTotalConDescuento(cantidad)}`)
                    } else {
                        alert(`Es un total de ${producto.calcularTotal(cantidad)}`)
                    }               
                }
            }
            do { 
                manejarCantidad();
            } while (cantidad > producto.stock);

            producto.descontarStock(cantidad);
        } else {
            alert(`Ese Producto no existe`)
        }
    }

    do {
        manejarProducto()
    } while (!producto);
}

do {
   userInput = prompt(`Hola, Bienvenido a Tony Delivery te gustaria que te llevemos bebidas a tu Casa Fiesta? Si o No`);
    
} while (!(userInput.toLowerCase() == `no`|| userInput.toLowerCase() == `si`));


if (userInput.toLowerCase() == "si") {
    carrito()

    do {
        masProductos = prompt(`Necesita algo mas?`);
        if ( masProductos.toLowerCase() == `si`){
            carrito();
        }
    } while (masProductos.toLowerCase() !== `no`);
}

if (userInput.toLowerCase() == "no"){
    alert('Te esperamos en otra oportunidad!');
}

