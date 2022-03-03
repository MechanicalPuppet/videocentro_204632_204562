const InventarioControlador = require('../Controladores/InventarioControlador');
const RentaControlador = require('../Controladores/RentaControlador');
const InventarioPersistencia = new InventarioControlador();
const RentaPersistencia = new RentaControlador();

let fecha = new Date("2022/03/03");
let rentaPrueba = {
    total: 521,
    tiempo: 2,
    fechaRenta: fecha,
    inventario: { _id: '622054cbd5945fc757e87857' },
    empleado:{ _id: '62203d2e5c64bd1df1933c38' },
    cliente:{ _id: '62203c8d9a815c200475b2ec' }
};

RentaPersistencia.insertarDato(rentaPrueba).then((res)=> {
    console.log("Se ha ingresado el dato correctamente" + res._id);
}).catch((err) => {
    console.log("Error");

});

/*
InventarioPersistencia.consultarUnDato("622054cbd5945fc757e87857").then((res) => {
    console.log("Se ha ingresado el dato correctamente " + res._id);
}).catch((err) => {
    console.log("Error");
});


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
