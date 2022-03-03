'use strict'

const videojuegoModel = require('../Entidades/Videojuego');
const videojuegoPer = require('../Entidades/Videojuego');
const basededatos = require('../Persistencia/Mongodb');

class VideojuegoPersistencia{



    async insertarDato(nuevoDato){
        const dato = new videojuegoModel({
            nombre: nuevoDato.nombre,
            precio: nuevoDato.precio, //Cambiar a float    
            empresa: nuevoDato.empresa,
            categoria: nuevoDato.categoria,
            oferta: nuevoDato.oferta
        });
        await dato.save();
        console.log('se agrego correctamente el dato: '+ nuevoDato.nombre )
        return dato;
    }

    async eliminarDato(idBuscar){
        const user = await videojuegoModel.deleteOne({
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
        const user = await videojuegoModel.updateOne({
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
        const user = await videojuegoModel.findOne({
          _id: idBuscar
        });
        return user;
      }
    
    async consultarTodosDatos() {
      const user = await videojuegoModel.find();
      return user;
    }


}

module.exports = VideojuegoPersistencia;