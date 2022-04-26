'use strict'

const inventarioModel = require('../Entidades/Inventario');
const inventarioPer = require('../Entidades/Inventario');
const basededatos = require('../Persistencia/Mongodb');

class InventarioPersistencia{

    async insertarDato(nuevoDato){
        const dato = new inventarioModel({
            unidadesExistencia: nuevoDato.unidadesExistencia,
    unidadesTienda: nuevoDato.unidadesTienda,
    videojuego: nuevoDato.videojuego,
        });
        await dato.save();
        console.log('se agrego correctamente el dato: '+ nuevoDato.unidadesExistencia )
        return dato;
    }

    async eliminarDato(idBuscar){
        const user = await inventarioModel.deleteOne({
            _id: idBuscar
        });
        if (user.deletedCount != 0){
            console.log('se elimino correctamente el dato con id: '+ idBuscar);    
        } else{
            console.log('no se encontro un dato con id: ' +idBuscar)
        }
        return user;
    }

    async actualizarDato(idBuscar, numExistencias){
        const user = await inventarioModel.updateOne({
            _id: idBuscar
        }, {
            $set: {
                unidadesExistencia: numExistencias
            }
        });
        if (user.modifiedCount != 0){
            console.log('El id '+idBuscar+' se actualizo correctamente con el dato nuevo: '+numExistencias)
        }else{
            console.log('El id '+ idBuscar+ ' no existe');
        }
        return user;
    }

    async consultarUnDato(idBuscar) {
        const user = await inventarioModel.findOne({
          _id: idBuscar
        });
        return user;
      }
    
    async consultarTodosDatos() {
      const user = await inventarioModel.find();
      return user;
    }


}

module.exports = InventarioPersistencia;