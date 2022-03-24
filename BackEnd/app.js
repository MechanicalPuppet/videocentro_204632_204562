const express = require('express');
const morgan = require("morgan");
const cors = require("cors");
const empleadoRouter = require('../BackEnd/Routers/empleadoRoutes');
const videojuegoRouter = require('../BackEnd/Routers/videojuegoRoutes');
const inventarioRouter = require ('../BackEnd/Routers/inventarioRoutes');
const rentaRouter = require('../BackEnd/Routers/rentaRouters');
const clienteRouter = require ('../BackEnd/Routers/clienteRoutes');

const corsOptions = {
    origin:"*",
    Credential:true,
    optionSuccessStatus:200,
  } 

const globalErrorHandler = require('../BackEnd/Routers/appError');
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(corsOptions));

//Routers
app.use('/api/v1/empleado', empleadoRouter);
app.use('/api/v1/videojuego', videojuegoRouter);
app.use('/api/v1/inventario', inventarioRouter);
app.use('/api/v1/cliente', clienteRouter);
app.use('/api/v1/renta', rentaRouter);

app.all('*', (req, resp, next) =>{
    next(new globalErrorHandler(`No se pudo acceder a ${req.originalUrl} en el servidor`, 404));
});

//Global error Handler 
app.use(globalErrorHandler);


module.exports = app;
