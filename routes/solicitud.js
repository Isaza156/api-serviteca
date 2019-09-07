const { Router } = require('express');
const router = Router();
const _ = require('underscore');
const Servicio = require('../models/servicio');

router.get('/', (req, res) => {
    res.json(Servicio);
});

router.post('/', (req, res) => {
    const { Mes, Dia, Hora, Tipo, Placa, Cedula, Nombre, Telefono } = req.body;

    if (Mes && Dia && Hora && Tipo && Placa && Cedula && Nombre && Telefono) {
        if (Hora < 8 || Hora > 18) {
            res.send('Horario Incorrecto');
        } else {
            _.map(Servicio, (servi) => {
                if (servi.Mes == Mes && servi.Dia == Dia && servi.Hora == Hora) {
                    res.send('No tenemos Horario o Fecha Disponible');
                } else {
                    const id = Servicio.length + 1;
                    const newServi = { ...req.body, id } // con los 3 puntos ... pasa todo el objeto req.body dentro de un nuevo objeto, asi podremos guardar       
                    Servicio.push(newServi.saved());
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
        _.each(Servicio, (servi) => {
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
        res.json(Servicio);
    } else {
        res.send('Error al actualizar, verifique los datos');
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params; // guarda el id que se tiene por parametros
    _.each(Servicio, (servi, i) => { // each empieza a recorrer el arreglo
        if (servi.id == id) { // propiedad id es igual al id que recibe desde la ruta
            Servicio.splice(i, 1); // splice remueve con el indice que le demos (i) y el 1 es la cantidad que elimina
        }
    });
    res.send(Servicio);
});

module.exports = router;





// router.get('/', async (req, res) => {
//     const servicios = await Servicio.find().sort('-_id');
//     res.json(servicios);
// });

// router.post('/', (req, res) => {
//     const { mes, dia, hora, tipo, placa, cedula, nombre, telefono } = req.body;

//     if (mes && dia && hora && tipo && placa && cedula && nombre && telefono) {
//         if (hora < 8 || hora > 18) {
//             res.send('Horario Incorrecto');
//         } else {
//             _.each(servicios, (servi) => {
//                 if (mes == servi.mes && dia == servi.dia && hora == servi.hora) {
//                     res.send('No tenemos Horario o Fecha Disponible');
//                 } else {
//                     const id = servicios.length + 1;
//                     const newServi = { ...req.body, id } // con los 3 puntos ... pasa todo el objeto req.body dentro de un nuevo objeto, asi podremos guardar.
//                     servicios.push(newServi());
//                     res.json(servicios);
//                 }
//             });
//         }
//     } else {
//         res.send('Faltan Campos por llenar');
//     }
// });

// router.put('/:id', (req, res) => { // actualizar un dato
//     const { id } = req.params;
//     const { mes, dia, hora, tipo, placa, cedula, nombre, telefono } = req.body; // obtener datos a actualizar

//     if (mes && dia && hora && tipo && placa && cedula && nombre && telefono) {
//         _.each(servicios, (servi) => {
//             if (servi.id == id) {
//                 servi.mes = mes;
//                 servi.dia = dia;
//                 servi.hora = hora;
//                 servi.tipo = tipo;
//                 servi.placa = placa;
//                 servi.cedula = cedula;
//                 servi.nombre = nombre;
//                 servi.telefono = telefono;
//             }
//         });
//         res.json(servicios);
//     } else {
//         res.send('Error al actualizar, verifique los datos');
//     }
// });

// router.delete('/:id', (req, res) => {
//     const { id } = req.params; // guarda el id que se tiene por parametros
//     _.each(servicios, (servi, i) => { // each empieza a recorrer el arreglo
//         if (servi.id == id) { // propiedad id es igual al id que recibe desde la ruta
//             servicios.splice(i, 1); // splice remueve con el indice que le demos (i) y el 1 es la cantidad que elimina
//         }        
//     });
//     res.send(servicios);
// });

// module.exports = router;