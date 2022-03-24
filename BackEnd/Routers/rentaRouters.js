const express = require('express');
const RentaPersistencia = require('../Controladores/RentaControlador');
const router = express.Router();
const renta = new RentaPersistencia()

router.route('/').get(async (req, res) => {
    const data = await renta.consultarTodosDatos();
    res.json(data);
});


router.route("/").post(async (req, res) => {
    const rentaNew = {
        total: req.body.total,
        tiempo: req.body.tiempo, 
        fechaRenta: req.body.fechaRenta,
        inventario: req.body.inventario,
        empleado: req.body.empleado, 
        cliente: req.body.cliente
    };


    await renta.insertarDato(rentaNew);

    res.status(201).json({
        status: 'Agregado',
        body: inventarioNew
    });

}).put(async (req, res) => {
    const rentaNew = {
        total: req.body.total // ! NO SABEMOS QUÉ SUCEDE AQUÍ AYUDA POR FAVOR POR QUÉ ESTÁN SIMILARES A LOS DE ARRIBA?
    };

    const data = await renta.actualizarDato(rentaNew);
    res.status(201).json({
        status: 'Actualizado',
        body: data

    });
});


router.route("/:id").get(async (req, res) => {
    const id = req.params.id
    const data = await renta.consultarUnDato(id);
    res.json(data);

}).delete(async (req, res) => {
    const id = req.params.id;

    const data = await renta.eliminarDato(id);
    res.status(201).json({
        status: 'Eliminado',
        body: data
    });
});

module.exports = router;