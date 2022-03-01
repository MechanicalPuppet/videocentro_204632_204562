'use strict';

const mongoose = require('mongoose');

const ofertaSchema = new mongoose.Schema({

    id: Number,
    nombre: String,
    descuento: Number //No encontre el float y el double. Hay que cambiarlo en la proxima version


});

const ofertaModel = mongoose.model('oferta', ofertaSchema);
module.exports = ofertaModel;