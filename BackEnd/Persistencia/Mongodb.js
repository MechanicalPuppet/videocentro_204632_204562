const mongoose = require('mongoose');
const app = require('../app');
const DB = 'mongodb://localhost:27017/videocentro';

//Inicializa la base de datos 
mongoose.connect(DB)
    .then(con => {
        console.log('Correctly connected to the DB');
    })
    .catch(err => {
        console.log(err);
    })


    //Levanto el servidor 
const port = 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

module.exports = mongoose;