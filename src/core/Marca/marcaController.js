const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Marca = mongoose.model('Marca');

const inserirMarca = (req, res) => {
    const params = {
        nome: req.body.nome
    }

    Marca.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(201).json({
                "_id": data._id,
                "message": `Marca [${data.nome}] inserido com sucesso`
        });
    });

}

const alterarMarca = (req, res) => {
    const params = {
        nome: req.body.nome
    }

    Marca.findByIdAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(200).json({
                "message": `Marca [${data.nome}] alterado com sucesso`
        });
    });
}

const selecionarMarca = (req, res) => {
    Marca.find({}, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(200).json(data);
    });

}

const selecionarMarcaPorId = (req, res) => {
    Marca.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                 "message": "Erro interno" 
            })
        }

        return res.status(200).json(data);

    });

}

const excluirMarca = (req, res) => {
    Marca.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                    "message": "Erro interno"
            });
        }

        return res.status(200).json({
                "message": `Marca [${data.nome}] removido com sucesso`
        });
    });
}

module.exports = {
    inserirMarca,
    selecionarMarca,
    selecionarMarcaPorId,
    alterarMarca,
    excluirMarca
}