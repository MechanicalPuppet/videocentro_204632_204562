'use strict';
const mongoose = require('mongoose');


const inventarioSchema = new mongoose.Schema({
    id: Number,
    unidadesExistencia: Number,
    unidadesTienda: Number,
    videojuego: { type: Schema.ObjectId, ref: "videojuegos" }

});

const inventarioModel = mongoose.model('inventario', inventarioSchema);
module.exports = inventarioModel;