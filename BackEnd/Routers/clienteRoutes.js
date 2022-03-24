const express = require('express');
const  ClientePersistencia= require('../Controladores/ClienteControlador');
const router = express.Router();
const cliente = new ClientePersistencia()

router.route('/').get(async (req, res) => {
    const data = await cliente.consultarTodosDatos();
    res.json(data);
});


router.route("/").post(async (req, res) => {
    const clienteNew = {
        usuario: req.body.usuario,
        contraseña: req.body.contraseña,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    };


    await cliente.insertarDato(clienteNew);

    res.status(201).json({
        status: 'Agregado',
        body: clienteNew
    });

}).put(async (req, res) => {
    const clienteNew = {
        usuario: req.body.usuario // ! NO SABEMOS QUÉ SUCEDE AQUÍ AYUDA POR FAVOR POR QUÉ ESTÁN SIMILARES A LOS DE ARRIBA?
    };

    const data = await cliente.actualizarDato(clienteNew);
    res.status(201).json({
        status: 'Actualizado',
        body: data

    });
});


router.route("/:id").get(async (req, res) =>{
    const id = req.params.id
    const data = await cliente.consultarUnDato(id);
    res.json(data);

}).delete(async (req, res) => {
    const id = req.params.id;

    const data = await cliente.eliminarDato(id);
    res.status(201).json({
        status: 'Eliminado',
        body:data
    });
});

module.exports = router;

