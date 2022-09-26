const productos = {cervezas: 100, vinos: 50};
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