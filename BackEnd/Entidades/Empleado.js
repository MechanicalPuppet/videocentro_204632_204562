'use strict';

const mongoose = require('mongoose');

const empleadoSchema = new mongoose.Schema({
    usuario: String,
    contraseña: String
});


const empleadoModel = mongoose.model('empleados', empleadoSchema);
module.exports = empleadoModel;


