const mongoose = require('mongoose');

const enfermedad = new mongoose.Schema({
    disease: {
        type: String,
        lowercase: true,
        required: true
    }
}, { timestamps: true })

const Enfermedad = mongoose.model('Enfermedad', hiloSchema);

module.exports = Enfermedad;