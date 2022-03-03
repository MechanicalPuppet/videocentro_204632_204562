'use strict';

const mongoose = require('mongoose');
const clienteModel = require('../Entidades/Cliente');
const empleadoModel = require('../Entidades/Empleado');
const inventarioModel = require('../Entidades/Inventario');

const rentaSchema = new mongoose.Schema({
    total: Number, //Cambiar a float
    tiempo: Number, //Son los días despues de la fecha de renta
    fechaRenta: Date,
    inventario: inventarioModel.schema,
    empleado: empleadoModel.schema,
    cliente: clienteModel.schema


});

const rentaModel = mongoose.model('renta', rentaSchema);

module.exports = rentaModel;