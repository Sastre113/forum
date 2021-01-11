const mongoose = require('mongoose');

const hiloSchema = new mongoose.Schema({
    idThread: {
        type: String,
        required: true
    },
    idAuthor: {
        type: String,
        required: true
    },
    disease: {
        type: String,
        required: true
    },
    titleThread: {
        type: String,
        required: true
    },
    bodyThread: {
        type: String,
        required: true
    }

}, {timestamps: true})

const Hilo = mongoose.model('Hilo', hiloSchema);

module.exports = Hilo;