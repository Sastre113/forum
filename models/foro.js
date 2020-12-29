const mongoose = require('mongoose');

const Foro = mongoose.model('Foro', {
    _id:{
        type: Number,
        required: true
    },
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

})

module.exports = Foro;