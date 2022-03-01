'use strict';

const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    id: Number,
    usuario: String,
    contraseña: String



});


const empleadoModel = mongoose.model('empleados', empleadoSchema);
module.exports = empleadoModel;