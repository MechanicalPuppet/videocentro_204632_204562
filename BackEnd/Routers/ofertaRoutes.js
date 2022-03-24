const express = require('express');
const  OfertaPersistencia= require('../Controladores/OfertaControlador');
const router = express.Router();
const oferta = new OfertaPersistencia()

router.route('/').get(async (req, res) => {
    const data = await oferta.consultarTodosDatos();
    res.json(data);
});


router.route("/").post(async (req, res) => {
    const ofertaNew = {
        nombre: req.body.nombre,
        descuento: req.body.descuento
    };


    await oferta.insertarDato(ofertaNew);

    res.status(201).json({
        status: 'Agregado',
        body: ofertaNew
    });

}).put(async (req, res) => {
    const ofertaNew = {
        nombre: req.body.nombre // ! NO SABEMOS QUÉ SUCEDE AQUÍ AYUDA POR FAVOR POR QUÉ ESTÁN SIMILARES A LOS DE ARRIBA?
    };

    const data = await oferta.actualizarDato(ofertaNew);
    res.status(201).json({
        status: 'Actualizado',
        body: data

    });
});


router.route("/:id").get(async (req, res) =>{
    const id = req.params.id
    const data = await oferta.consultarUnDato(id);
    res.json(data);

}).delete(async (req, res) => {
    const id = req.params.id;

    const data = await oferta.eliminarDato(id);
    res.status(201).json({
        status: 'Eliminado',
        body:data
    });
});

module.exports = router;

