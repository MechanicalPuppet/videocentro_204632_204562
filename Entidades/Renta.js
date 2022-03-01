'use strict';

const mongoose = require('mongoose');


const rentaSchema = new mongoose.Schema({
    id: Number,
    total: Number, //Cambiar a float
    tiempo: Number, //Son los días despues de la fecha de renta
    fechaRenta: Date,
    inventario: { type: Schema.ObjectId, ref: "inventario" },
    empleado: { type: Schema.ObjectId, ref: "empleado" },
    cliente: { type: Schema.ObjectId, ref: "cliente" }


});

const rentaSchema = mongoose.model('renta', rentaSchema);

module.exports = rentaSchema;