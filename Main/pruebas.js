const InventarioControlador = require('../Controladores/InventarioControlador');
const InventarioPersistencia = new InventarioControlador();

const inventarioPrueba = {
    unidadesExistencia: 10,
    unidadesTienda: 10,
    videojuego: { _id: '62204fbb954d609742681c7b' } 
    
};

InventarioPersistencia.insertarDato(inventarioPrueba).then((res) => {
    console.log("Se ha ingresado el dato correctamente" + res._id);
}).catch((err) => {
    console.log("Error");
});

/*
const OfertaPersistencia = require('../Controladores/OfertaControlador');
const VideojuegoPersistencia = require('../Controladores/VideojuegoControlador');

const ofertaPersistencia = new OfertaPersistencia();
const videojuegoPersistencia = new VideojuegoPersistencia();

const videoJuegoPrueba = {
    nombre: "Pes 2020",
    precio: 350.58,
    empresa: "Konami",
    categoria: "Soccer",
    oferta: { _id: '62203bab7bbc11511c64291e' }
};

videojuegoPersistencia.insertarDato(videoJuegoPrueba).then((res) => {
    console.log("Se ha ingresado el dato correctamente" + res.nombre);
}).catch((err) => {
    console.log("Error");
});
*/
/*
const ClienteControlador = require('../Controladores/ClienteControlador');
const ofertaControlador = require('../Controladores/OfertaControlador');
const VideoJuegoControlador = require('../Controladores/VideojuegoControlador');
const EmpleadoControlador = require('../Controladores/EmpleadoControlador');
const InventarioControlador = require('../Controladores/InventarioControlador');
const RentaControlador = require('../Controladores/RentaControlador');
*/

//Todos los métodos son asyncronos.
//const ofertaPersistencia = new ofertaControlador();
//const VideoJuegoPersistencia = new VideoJuegoControlador();

/*
const ClientePersistencia = new ClienteControlador();
const VideoJuegoPersistencia = new VideoJuegoControlador();
const EmpleadoPersistencia = new EmpleadoControlador();
const InventarioPersistencia = new InventarioControlador();
const RentarPersistencia = new RentaControlador();
*/

//const oferta =  ofertaPersistencia.consultarUnDato('62203bab7bbc11511c64291e');


/*
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
*/
