'use strict';

const mongoose = require('mongoose');
const ofertaModel = require('./Oferta');

const videojuegoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number, //Cambiar a float    
    empresa: String,
    categoria: String,
    oferta: ofertaModel.schema
});

const juegoModel = mongoose.model('videojuegos', videojuegoSchema);
module.exports = juegoModel;