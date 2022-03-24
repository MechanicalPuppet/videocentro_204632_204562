'use strict'

const empleadoModel = require('../Entidades/Empleado');
const empleadoPer = require('../Entidades/Empleado');
const basededatos = require('../Persistencia/Mongodb');

class EmpleadoPersistencia{

    async insertarDato(nuevoDato){
        const dato = new empleadoModel({
            usuario: nuevoDato.usuario,
            contraseña: nuevoDato.contraseña
        });
        await dato.save();
        console.log('se agrego correctamente el dato: '+ nuevoDato.nombre )
        return dato;
    }

    async eliminarDato(idBuscar){
        const user = await empleadoModel.deleteOne({
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
        const user = await empleadoModel.updateOne({
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
        const user = await empleadoModel.findOne({
          _id: idBuscar
        });
        return user;
      }
    
    async consultarTodosDatos() {
      const user = await empleadoModel.find();
      return user;
    }


}

module.exports = EmpleadoPersistencia;