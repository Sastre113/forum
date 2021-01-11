const mongoose = require('mongoose');

const respuestaSchema = new mongoose.Schema({
    idThread: {
        type: Number,
        required: true
    },
    idAuthor: {
        type: Number,
        required: true
    },
    titleReply: {
        type: String,
        required: true
    },
    bodyReply: {
        type: String,
        required: true
    }

},{timestamps: true})

const Respuesta = mongoose.model('Respuesta', respuestaSchema);

module.exports = Respuesta;