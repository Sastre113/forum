const mongoose = require('mongoose');

const foroSchema = new mongoose.Schema({
    tema:{
        type: String,
        required: false
    },
    titulo:{
        type: String,
        required: true
    },
    post:{
        type: String,
        required: true,
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'usuario'
    }

}, {timestamps:true})

const Foro = mongoose.model('Foro', foroSchema)

module.exports = Foro;