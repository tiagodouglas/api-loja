const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        precoUnitario: {
            type: Number,
            required: true
        },
        categoria: {
            type: mongoose.Schema.ObjectId,
            ref: 'Categoria'
        },
        marca: {
            type: mongoose.Schema.ObjectId,
            ref: 'Marca'
        }
    });

    return mongoose.model('Produto', schema);
}