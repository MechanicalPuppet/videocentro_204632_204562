const express = require('express');
const VideojuegoPersistencia = require('../BackEnd/Controladores/VideojuegoControlador');
const router = express.Router();
const videojuego = new VideojuegoPersistencia()

router.route('/').get(async (req, res) => {
    const data = await videojuego.consultarTodosDatos();
    res.json(data);
});


router.route("/").post(async (req, res) => {
    const videojuegoNew = {
        nombre: req.body.nombre,
        precio: req.body.precio, 
        empresa: req.body.empresa,
        categoria: req.body.categoria,
        oferta: req.body.oferta
    };


    await videojuego.insertarDato(videojuegoNew);

    res.status(201).json({
        status: 'Agregado',
        body: videojuegoNew
    });

}).put(async (req, res) => {
    const videojuegoNew = {
        nombre: req.body.nombre // ! NO SABEMOS QUÉ SUCEDE AQUÍ AYUDA POR FAVOR POR QUÉ ESTÁN SIMILARES A LOS DE ARRIBA?
    };

    const data = await videojuego.actualizarDato(videojuegoNew);
    res.status(201).json({
        status: 'Actualizado',
        body: data

    });
});


router.route("/:id").get(async (req, res) => {
    const id = req.params.id
    const data = await videojuego.consultarUnDato(id);
    res.json(data);

}).delete(async (req, res) => {
    const id = req.params.id;

    const data = await videojuego.eliminarDato(id);
    res.status(201).json({
        status: 'Eliminado',
        body: data
    });
});

module.exports = router;

