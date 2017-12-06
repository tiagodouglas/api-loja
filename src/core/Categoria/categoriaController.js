const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Categoria = mongoose.model('Categoria');

const inserirCategoria = (req, res) => {

    const params = {
        nome: req.body.nome,
        descricao: req.body.descricao   
    }

    Categoria.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(201).json({
            content: {
                "_id": data._id,
                "message": `Categoria [${data.nome}] inserido com sucesso`
            }
        });
    });

}

const alterarCategoria = (req, res) => {
    const params = {
        nome: req.body.nome,
        descricao: req.body.descricao      
    }

    Categoria.findByIdAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            });

        return res.status(200).json({
            content: {
                "message": `Categoria [${data.nome}] alterado com sucesso`
            }
        });
    });
}

const selecionarCategoria = (req, res) => {
    Categoria.find({}, (err, data) => {

        if (err)
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            })

        return res.status(200).json(data);
    });

}

const selecionarCategoriaPorId = (req, res) => {
    Categoria.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                content: { "message": "Erro interno" }
            })
        }

        return res.status(200).json(data);

    });

}

const excluirCategoria = (req, res) => {
    Categoria.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                content: {
                    "message": "Erro interno"
                }
            })
        }

        return res.status(200).json({
                "message": `Categoria [${data.nome}] removido com sucesso`
        });
    });
}

module.exports = {
    inserirCategoria,
    selecionarCategoria,
    selecionarCategoriaPorId,
    alterarCategoria,
    excluirCategoria
}