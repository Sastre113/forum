const mongoose = require('mongoose');

const foroSchema = new mongoose.Schema({
    idAutor:{
        type: Number,
        required: true
    },
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
        required: true
    }

}, {timestamps:true})

const Foro = mongoose.model('Foro', foroSchema)

module.exports = Foro;