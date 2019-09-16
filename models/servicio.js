const { Schema, model } = require('mongoose');

const ServicioSchema = new Schema({
    Mes: { type: Number, required:true },
    Dia: { type: Number, required:true },    
    Hora: { type: Number, required:true },
    Tipo: { type: Number, required:true },
    Placa: { type: String, required:true },
    Cedula: { type: Number, required:true },
    Nombre: { type: String, required:true },
    Telefono: { type: Number, required:true },
    created_since: { type: Date, default: Date.now }
});

module.exports = model('Servicio', ServicioSchema);