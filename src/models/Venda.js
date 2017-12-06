const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        total: {
            type: Number,
            required: true
        },
        cliente: {
            type: mongoose.Schema.ObjectId,
            ref: 'Cliente'
        },
        vendedor: {
            type: mongoose.Schema.ObjectId,
            ref: 'Vendedor'
        },
        dataVenda: {
            type: Date,
            required: true
        },
        taxa: {
            type: Number
        },
        desconto: {
            type: Number
        }
    });

    return mongoose.model('Venda', schema);
}