'use strict'

const ofertaModel = require('../Entidades/Oferta');
const basededatos = require('../Persistencia/Mongodb');

class OfertaPersistencia {

    async insertarDato(nuevoDato) {
        const dato = new ofertaModel({
            nombre: nuevoDato.nombre,
            descuento: nuevoDato.descuento
        });
        await dato.save();
        console.log('se agrego correctamente el dato: ' + nuevoDato.nombre)
        return dato;
    }

    async eliminarDato(idBuscar) {
        const user = await ofertaModel.deleteOne({
            _id: idBuscar
        });
        if (user.deletedCount != 0) {
            console.log('se elimino correctamente el dato con id: ' + idBuscar);
        } else {
            console.log('no se encontro un dato con id: ' + idBuscar)
        }
        return user;
    }

    async actualizarDato(idBuscar, clasificacionNueva) {
        const user = await ofertaModel.updateOne({
            _id: idBuscar
        }, {
            $set: {
                clasificacion: clasificacionNueva
            }
        });
        if (user.modifiedCount != 0) {
            console.log('El id ' + idBuscar + ' se actualizo correctamente con el dato nuevo: ' + clasificacionNueva)
        } else {
            console.log('El id ' + idBuscar + ' no existe');
        }
        return user;
    }

    async consultarUnDato(idBuscar) {
        const user = await ofertaModel.findOne({
            _id: idBuscar
        });
        return user;
    }

    async consultarTodosDatos() {
        const user = await ofertaModel.find();
        return user;
    }
}

module.exports = OfertaPersistencia;