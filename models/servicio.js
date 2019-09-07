const { Schema, model } = require('mongoose');

const ServicioSchema = new Schema({
    Mes: Number,
    Dia: Number,     
    Hora: Number,
    Tipo: Number,
    Placa: String,
    Cedula: Number,
    Nombre: Number,
    Telefono: Number,
    created_since: { type: Date, default: Date.now }
},{timestamps:true});

module.exports = model('Servicio', ServicioSchema);