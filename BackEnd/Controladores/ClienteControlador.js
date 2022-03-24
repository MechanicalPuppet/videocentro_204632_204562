'use strict'

const clienteModel = require('../Entidades/Cliente');
const clientePer = require('../Entidades/Cliente');
const basededatos = require('../Persistencia/Mongodb');

class ClientePersistencia{



    async insertarDato(nuevoDato){
        const dato = new clienteModel({
            usuario: nuevoDato.usuario,
    contraseña: nuevoDato.contraseña, //puede dar error
    direccion: nuevoDato.direccion,
    telefono: nuevoDato.telefono
            
        });
        await dato.save();
        console.log('se agrego correctamente el dato: '+ nuevoDato.nombre )
        return dato;
    }

    async eliminarDato(idBuscar){
        const user = await clienteModel.deleteOne({
            _id: idBuscar
        });
        if (user.deletedCount != 0){
            console.log('se elimino correctamente el dato con id: '+ idBuscar);    
        } else{
            console.log('no se encontro un dato con id: ' +idBuscar)
        }
        return user;
    }

    async actualizarDato(idBuscar, clasificacionNueva){
        const user = await clienteModel.updateOne({
            _id: idBuscar
        }, {
            $set: {
                clasificacion: clasificacionNueva
            }
        });
        if (user.modifiedCount != 0){
            console.log('El id '+idBuscar+' se actualizo correctamente con el dato nuevo: '+clasificacionNueva)
        }else{
            console.log('El id '+ idBuscar+ ' no existe');
        }
        return user;
    }

    async consultarUnDato(idBuscar) {
        const user = await clienteModel.findOne({
          _id: idBuscar
        });
        return user;
      }
    
    async consultarTodosDatos() {
      const user = await clienteModel.find();
      return user;
    }


}

module.exports = ClientePersistencia;