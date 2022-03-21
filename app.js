const express = require('express');

//Packages
const empleadoRouter = require('./Routers/empleadoRoutes');
const appError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');


const app = express();


//Body Parser JSON --> Este me ayuda a manipular todas las peticiones de la API 
app.use(express.json());



//   /api/numeroversión/recurso 

//Routers
app.use('/api/v1/empleados', empleadoRouter);


app.all('*', (req, resp, next) =>{
    next(new appError(`No se pudo acceder a ${req.originalUrl} en el servidor`, 404));
});


//Global error Handler 
app.use(globalErrorHandler);


module.exports = app;
