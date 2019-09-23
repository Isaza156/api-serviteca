const { Router } = require('express');
const router = Router();
const Servicio = require('../models/Servicio');
const _ = require('underscore');

router.get('/', async (req, res) => {
    const servicios = await Servicio.find().sort('-_id');
    res.json(servicios);
});

router.post('/', (req, res) => {
    const { Mes, Dia, Hora, Tipo, Placa, Cedula, Nombre, Telefono } = req.body;
    if (Mes && Dia && Hora && Tipo && Placa && Cedula && Nombre && Telefono) {
        if (Hora < 8 || Hora > 18) {
            res.send('Horario Incorrecto');
        } else {
            _.each(Servicio, () => {
                if (Mes == Servicio.Mes && Dia == Servicio.Dia && Hora == Servicio.Hora) {
                    res.send('No tenemos Horario o Fecha Disponible');
                } else {
                    const id = Servicio.length + 1;
                    const newServi = { ...req.body, id } // con los 3 puntos ... pasa todo el objeto req.body dentro de un nuevo objeto, asi podremos guardar       
                    Servicio.push(newServi);
                    res.json(Servicio);
                }
            });
        }
    } else {
        res.send('Faltan Campos por llenar');
    }
});

router.put('/:id', (req, res) => { // actualizar un dato
    const { id } = req.params;
    const { Mes, Dia, Hora, Tipo, Placa, Cedula, Nombre, Telefono } = req.body; // obtener datos a actualizar
    if (Mes && Dia && Hora && Tipo && Placa && Cedula && Nombre && Telefono) {
        _.each(servicios, (servi) => {
            if (servi.id == id) {
                servi.Mes = Mes;
                servi.Dia = Dia;
                servi.Hora = Hora;
                servi.Tipo = Tipo;
                servi.Placa = Placa;
                servi.Cedula = Cedula;
                servi.Nombre = Nombre;
                servi.Telefono = Telefono;
            }
        });
        res.json(servicios);
    } else {
        res.send('Error al actualizar, verifique los datos');
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; // guarda el id que se tiene por parametros
    _.each(servicios, (servi, i) => { // each empieza a recorrer el arreglo
        if (servi.id == id) { // propiedad id es igual al id que recibe desde la ruta
            servicio.splice(i, 1); // splice remueve con el indice que le demos (i) y el 1 es la cantidad que elimina
        }
    });
    res.send(servicios);
});

module.exports = router;
