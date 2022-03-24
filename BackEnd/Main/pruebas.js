const InventarioControlador = require('../Controladores/InventarioControlador');
const RentaControlador = require('../Controladores/RentaControlador');
const ClienteControlador = require('../Controladores/ClienteControlador');
const ofertaControlador = require('../Controladores/OfertaControlador');
const VideoJuegoControlador = require('../Controladores/VideojuegoControlador');
const EmpleadoControlador = require('../Controladores/EmpleadoControlador');

const InventarioPersistencia = new InventarioControlador();
const RentaPersistencia = new RentaControlador();
const ClientePersistencia = new ClienteControlador();
const videoJuegoPersistencia = new VideoJuegoControlador();
const EmpleadoPersistencia = new EmpleadoControlador();
const ofertaPersistencia = new ofertaControlador();






/*
InventarioPersistencia.actualizarDato('622054cbd5945fc757e87857',8).then((res) => {
    console.log("Se ha ingresado el dato correctamente" );
}).catch((err) => {
    console.log("Error");
});
*/

//AGREGAR DATOS

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

const videoJuegoPrueba = {
    nombre: "Pes 2020",
    precio: 350.58,
    empresa: "Konami",
    categoria: "Soccer",
    oferta: { _id: '62203bab7bbc11511c64291e' }
};

videoJuegoPersistencia.insertarDato(videoJuegoPrueba).then((res) => {
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
    console.log("Se ha ingresado el dato correctamente" + res.fecha);
}).catch((err) => {
    console.log("Error");

});
*/
//ELIMINAR 
/*
ofertaPersistencia.eliminarDato('622139a18a3a13176e64f600').then((res)=> {
    console.log("Se ha eliminado el dato correctamente");
}).catch((err) => {
    console.log("Error");

});

videoJuegoPersistencia.eliminarDato('6220507d3894c07e13146af1').then((res)=> {
    console.log("Se ha eliminado el dato correctamente");
}).catch((err) => {
    console.log("Error");

});


ClientePersistencia.eliminarDato('62213b9e8a3a13176e64f605').then((res)=> {
    console.log("Se ha eliminado el dato correctamente");
}).catch((err) => {
    console.log("Error");

});


EmpleadoPersistencia.eliminarDato('62213c508a3a13176e64f608').then((res)=> {
    console.log("Se ha eliminado el dato correctamente");
}).catch((err) => {
    console.log("Error");

});


InventarioPersistencia.eliminarDato('62213cdd8a3a13176e64f60b').then((res)=> {
    console.log("Se ha eliminado el dato correctamente");
}).catch((err) => {
    console.log("Error");

});
*/









