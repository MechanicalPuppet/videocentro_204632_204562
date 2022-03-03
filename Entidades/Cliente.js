'use strict';
const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
    usuario: String,
    contraseña: String,
    direccion: String,
    telefono: String

});

//VICTOR, PUSE CLIENTESSSSSSSSSSS NO CLIENTE, POR SI NOS TRUENA
const clienteModel = mongoose.model('clientes', clienteSchema);

module.exports = clienteModel;