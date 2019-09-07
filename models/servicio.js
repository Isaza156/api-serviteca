const { Schema, model } = require('mongoose');

const ServicioSchema = new Schema({
    mes: { type: Number, required: true },
    dia: { type: Number, required: true },
    hora: { type: Number, required: true },
    servicio: { type: Number, required: true },
    placa: { type: String, required: true },
    cedula: { type: Number, required: true },
    nombre: { type: String, required: true },
    telefono: { type: Number, required: true },
    created_since: { type: Date, default: Date.now }
});

module.exports = model('Servicio', ServicioSchema);