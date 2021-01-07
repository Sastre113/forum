const mongoose = require('mongoose')

const frasesDB = mongoose.model('frasesSalut', {
    frase:{
        type: String,
        required: true
    },
    autor:{
        type: String,
        required: false
    }
})

module.exports = frasesDB