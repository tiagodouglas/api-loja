const mongoose = require('mongoose');

module.exports = () => {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        }
    });

    return mongoose.model('Marca', schema);
}