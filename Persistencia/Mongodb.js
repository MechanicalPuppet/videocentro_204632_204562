const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path: './config.env'});
const app = require('./app');
const DB = 'mongodb://localhost:27017/videocentro';

//Inicializa la base de datos 
mongoose.connect(DB)
    .then(con => {
        console.log('Correctly connected to the DB');
    })
    .catch(err => {
        console.log(err);
    })

module.exports = mongoose;