const mongoose = require('mongoose');

const respuestaSchema = new mongoose.Schema({
    idThread: {
        type: String,
        required: true
    },
    idAuthor: {
        type: String,
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