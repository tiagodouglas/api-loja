const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        venda: {
            type: mongoose.Schema.ObjectId,
            ref: 'Venda'
        },
        fatura: {
            type: mongoose.Schema.ObjectId,
            ref: 'Fatura'
        },
        totalItem: {
            type: Number,
            required: true
        },
        produto: {
            type: mongoose.Schema.ObjectId,
            ref: 'Produto'
        },
        quantidade: {
            type: Number,
            required: true
        }
    });

    return mongoose.model('VendaItem', schema);
}