const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Vendedor = mongoose.model('Vendedor');

const inserirVendedor = (req, res) => {

    const params = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        numero: req.body.numero,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        status: req.body.status,
        dataCadastro: new Date()
      
    }

    Vendedor.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(201).json({
                "_id": data._id,
                "message": `Vendedor [${data.nome}] inserido com sucesso`
        });
    });

}

const alterarVendedor = (req, res) => {
    const params = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        bairro: req.body.bairro,
        numero: req.body.numero,
        cidade: req.body.cidade,
        estado: req.body.estado,
        cep: req.body.cep,
        telefone: req.body.telefone,
        cpf: req.body.cpf,
        status: req.body.status,
        dataCadastro: new Date()
    }

    Vendedor.findByIdAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            });

        return res.status(200).json({
                "message": `Vendedor [${data.nome}] alterado com sucesso`
        });
    });
}

const selecionarVendedor = (req, res) => {
    Vendedor.find({}, (err, data) => {

        if (err)
            return res.status(500).json({
                    "message": "Erro interno"
            })

        return res.status(200).json(data);
    });

}

const selecionarVendedorPorId = (req, res) => {
    Vendedor.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                 "message": "Erro interno" 
            })
        }

        return res.status(200).json(data);

    });

}

const excluirVendedor = (req, res) => {
    Vendedor.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            console.log(err.message);
            return res.status(500).json({
                    "message": "Erro interno"
            })
        }

        return res.status(200).json({
                "message": `Vendedor [${data.nome}] removido com sucesso`
        });
    });
}

module.exports = {
    inserirVendedor,
    selecionarVendedor,
    selecionarVendedorPorId,
    alterarVendedor,
    excluirVendedor
}