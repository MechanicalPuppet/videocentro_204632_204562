'use strict';
const mongoose = require('mongoose');
const videoJuegoModel = require('../Entidades/Videojuego');

const inventarioSchema = new mongoose.Schema({
    unidadesExistencia: Number, // Las unidades disponibles
    unidadesTienda: Number, // Las unidades totales del video centro
    videojuego: videoJuegoModel.schema
});

const inventarioModel = mongoose.model('inventario', inventarioSchema);
module.exports = inventarioModel;