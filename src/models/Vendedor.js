const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        endereco: {
            type: String,
            required: true
        },
        cidade: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        estado: {
            type: String,
            required: true
        },
        bairro: {
            type: String,
            required: true
        },
        cep: {
            type: Number,
            required: true
        },
        telefone: {
            type: Number,
            required: true
        },
        cpf: {
            type: Number,
            required: true
        },
        dataCadastro: {
            type: Date,
            required: true
        },
        dataAlteracao: {
            type: Date
        },
        status: {
            type: Boolean,
            required: true
        }
    });

    return mongoose.model('Vendedor', schema);
}