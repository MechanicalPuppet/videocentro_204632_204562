'use strict';

const mongoose = require('mongoose');

const videojuegoSchema = new mongoose.Schema({
    id: Number,
    nombre: String,
    precio: Number, //Cambiar a float    
    empresa: String,
    categoria: String,
    oferta: { type: Schema.ObjectId, ref: "oferta" }


});

const juegoModel = mongoose.model('videojuegos', videojuegoSchema);
module.exports = juegoModel;