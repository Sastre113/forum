const mongoose = require('mongoose')

const frasesDB = mongoose.model('frasesdbs', {
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