const { Schema, model } = require('mongoose');

const ServicioSchema = new Schema({
    Mes: Number,
    Dia: Number, 
    Hora: Number,
    Tipo: String,
    Placa: String, 
    Cedula: Number,
    Nombre: String,
    Telefono: Number,
    created_since: { type: Date, default: Date.now }
});

module.exports = model('Servicio', ServicioSchema);