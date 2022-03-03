const ofertaControlador = require('../Controladores/OfertaControlador');
const ClienteControlador = require('../Controladores/ClienteControlador');
const VideoJuegoControlador = require('../Controladores/VideojuegoControlador');
const EmpleadoControlador = require('../Controladores/EmpleadoControlador');
const InventarioControlador = require('../Controladores/InventarioControlador');
const RentaControlador = require('../Controladores/RentaControlador');


//Todos los métodos son asyncronos. 
const ofertaPersistencia = new ofertaControlador();
const ClientePersistencia = new ClienteControlador();
const VideoJuegoPersistencia = new VideoJuegoControlador();
const EmpleadoPersistencia = new EmpleadoControlador();
const InventarioPersistencia = new InventarioControlador();
const RentarPersistencia = new RentaControlador();

let ofertaPrueba = {
    nombre: "Oferta navideña 2022",
    descuento: 50
};

ofertaPersistencia.insertarDato(ofertaPrueba).then((res) => {
    console.log("Se ha ingresado el dato correctamente" + res.nombre);

}).catch((err) => {
    console.log("Error");

});

let ClientePrueba = {
    usuario: "Juanito34",
    contraseña: "12345",
    direccion: "Calle siempre viva",
    telefono: "6874123543"
};

ClientePersistencia.insertarDato(ClientePrueba).then((res)=> {
    console.log("Se ha ingresado el dato correctamente" + res.nombre);
}).catch((err) => {
    console.log("Error");

});

let EmpleadoPrueba = {
    usuario: "LuisJefe1",
    contraseña: "Jefe21",
    
};

EmpleadoPersistencia.insertarDato(EmpleadoPrueba).then((res)=> {
    console.log("Se ha ingresado el dato correctamente" + res.nombre);
}).catch((err) => {
    console.log("Error");

});

let VideoJuegoPrueba = {
    nombre: "Minecraft",
    precio: 250.5,
    empresa: "Microsoft",
    categoria: "Horror",
    //oferta: {_id:}

};

VideoJuegoPersistencia.insertarDato(VideoJuegoPrueba).then((res)=> {
    console.log("Se ha ingresado el dato correctamente" + res.nombre);
}).catch((err) => {
    console.log("Error");

});

