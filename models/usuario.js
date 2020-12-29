const mongoose = require('mongoose');

const Usuario = mongoose.model('Usuario', {
    _id:{
        type: Number,
        required: true
    },
    paciente:{
        type: Boolean,
        default: true,
        required: true
    },
    nombre:{
        type: String,
        required: true
    },
    apellido:{
        type: String,
        required: true
    },
    fechaNacimiento:{
        type: String,
        required: true
    },
    enfermedad:{
        type: String,
        required: true
    },
    anonimo:{
        type: Boolean,
        default: false,
    }
})

module.exports = Usuario;