'use strict'

const rentaModel = require('../Entidades/Renta');
const rentaPer = require('../Entidades/Renta');
const basededatos = require('../Persistencia/Mongodb');
const InventarioControlador = require('../Controladores/InventarioControlador');
const inventarioModel = require('../Entidades/Inventario');
const InventarioPersistencia = new InventarioControlador();
class RentaPersistencia {



    async insertarDato(nuevoDato) {
        const dato = new rentaModel({
            total: nuevoDato.total, //Cambiar a float
            tiempo: nuevoDato.tiempo, //Son los días despues de la fecha de renta
            fechaRenta: nuevoDato.fechaRenta,
            inventario: nuevoDato.inventario,
            empleado: nuevoDato.empleado,
            cliente: nuevoDato.cliente
        });

        await dato.save();
       
        const inventario2 = await InventarioPersistencia.consultarUnDato(nuevoDato.inventario);
        InventarioPersistencia.actualizarDato(nuevoDato.inventario, inventario2.unidadesExistencia-1);
        
        console.log('se agrego correctamente el dato: ' + nuevoDato.nombre)
        return dato;
    }

    async eliminarDato(idBuscar) {
        const renta = await this.consultarUnDato(idBuscar);
        const inventario2 = await InventarioPersistencia.consultarUnDato(renta.inventario);
        await InventarioPersistencia.actualizarDato(renta.inventario, inventario2.unidadesExistencia+1);

        const user = await rentaModel.deleteOne({
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
        const user = await rentaModel.updateOne({
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
        const user = await rentaModel.findOne({
            _id: idBuscar
        });
        return user;
    }

    async consultarTodosDatos() {
        const user = await rentaModel.find();
        return user;
    }


}

module.exports = RentaPersistencia;