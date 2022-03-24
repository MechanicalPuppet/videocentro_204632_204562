const express = require('express');
const EmpleadoPersistencia = require('../Controladores/EmpleadoControlador');

const router = express.Router();

const empleado = new EmpleadoPersistencia();
/**
 * 
 * router.route('/').get(EmpleadoPersistencia.getAllEmpleados)
.post(EmpleadoPersistencia.createEmpleado);


 * 
 */

router.route('/').get(async (req, res) => {
    const data = await empleado.consultarTodosDatos();
    res.json(data);
});

router.route("/").post(async (req, res) => {
    const empleadoNew = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña
    };


    await empleado.insertarDato(empleadoNew);

    res.status(201).json({
        status: 'Agregado',
        body: empleadoNew
    });

}).put(async (req, res) => {
    const empleadoNew = {
        usuario: req.body.usuario // ! NO SABEMOS QUÉ SUCEDE AQUÍ AYUDA POR FAVOR POR QUÉ ESTÁN SIMILARES A LOS DE ARRIBA?
    };

    const data = await empleado.actualizarDato(empleadoNew);
    res.status(201).json({
        status: 'Actualizado',
        body: data

    });
});


router.route("/:id").get(async (req, res) =>{
    const id = req.params.id
    const data = await empleado.consultarUnDato(id);
    res.json(data);

}).delete(async (req, res) => {
    const id = req.params.id;

    const data = await empleado.eliminarDato(id);
    res.status(201).json({
        status: 'Eliminado',
        body:data
    });
});

module.exports = router;

