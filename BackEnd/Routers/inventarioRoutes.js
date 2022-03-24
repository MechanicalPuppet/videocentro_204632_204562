const express = require('express');
const InventarioPersistencia = require('../Controladores/InventarioControlador');
const router = express.Router();
const inventario = new InventarioPersistencia()

router.route('/').get(async (req, res) => {
    const data = await inventario.consultarTodosDatos();
    res.json(data);
});


router.route("/").post(async (req, res) => {
    const inventarioNew = {
        unidadesExistencia: req.body.unidadesExistencia,
        unidadesTienda: req.body.unidadesTienda, 
        videoJuego: req.body.videoJuego
    };


    await inventario.insertarDato(inventarioNew);

    res.status(201).json({
        status: 'Agregado',
        body: inventarioNew
    });

}).put(async (req, res) => {
    const inventarioNew = {
        unidadesExistencia: req.body.unidadesExistencia // ! NO SABEMOS QUÉ SUCEDE AQUÍ AYUDA POR FAVOR POR QUÉ ESTÁN SIMILARES A LOS DE ARRIBA?
    };

    const data = await inventario.actualizarDato(inventarioNew);
    res.status(201).json({
        status: 'Actualizado',
        body: data

    });
});


router.route("/:id").get(async (req, res) => {
    const id = req.params.id
    const data = await inventario.consultarUnDato(id);
    res.json(data);

}).delete(async (req, res) => {
    const id = req.params.id;

    const data = await inventario.eliminarDato(id);
    res.status(201).json({
        status: 'Eliminado',
        body: data
    });
});

module.exports = router;