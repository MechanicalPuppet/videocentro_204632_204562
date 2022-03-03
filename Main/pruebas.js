const ofertaControlador = require('../Controladores/OfertaControlador');


//Todos los métodos son asyncronos. 
const ofertaPersistencia = new ofertaControlador();


let ofertaPrueba = {
    nombre: "Oferta navideña 2022",
    descuento: 50
};

ofertaPersistencia.insertarDato(ofertaPrueba).then((res) => {
    console.log("Se ha ingresado el dato correctamente" + res.nombre);

}).catch((err) => {
    console.log("Error");

});




