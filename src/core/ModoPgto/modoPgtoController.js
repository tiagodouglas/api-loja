const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const ModoPgto = mongoose.model('ModoPgto');

const inserirModoPgto = (req, res) => {

    const params = {
        nome: req.body.nome,
        descricao: req.body.descricao       
    }

    ModoPgto.create(params, (err, data) => {
        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(201).json({
                "_id": data._id,
                "message": `ModoPgto [${data.nome}] inserido com sucesso`
        });
    });

}

const alterarModoPgto = (req, res) => {
        const params = {
        nome: req.body.nome,
        descricao: req.body.descricao      
    }

    ModoPgto.findByIdAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(200).json({
                "message": `ModoPgto [${data.nome}] alterado com sucesso`
        });
    });
}

const selecionarModoPgto = (req, res) => {
    ModoPgto.find({}, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            })

        return res.status(200).json(data);
    });

}

const selecionarModoPgtoPorId = (req, res) => {
    ModoPgto.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                 "message": "Erro interno"
            })
        }

        return res.status(200).json(data);
    });

}

const excluirModoPgto = (req, res) => {
    ModoPgto.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                    "message": "Erro interno"
            })
        }

        return res.status(200).json({
                "message": `ModoPgto [${data.nome}] removido com sucesso`
        });
    });
}

module.exports = {
    inserirModoPgto,
    selecionarModoPgto,
    selecionarModoPgtoPorId,
    alterarModoPgto,
    excluirModoPgto
}