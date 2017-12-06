const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;
const Cliente = mongoose.model('Cliente');

const inserirCliente = (req, res) => {

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

    Cliente.create(params, (err, data) => {

        if (err)
            return res.status(500).json({
                "message": "Erro interno"
            });

        return res.status(201).json({
            "message": `Cliente [${data.nome}] inserido com sucesso`
        });
    });

}

const alterarCliente = (req, res) => {
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

    Cliente.findByIdAndUpdate(new ObjectId(req.params.id), params, (err, data) => {
        if (err)
            return res.status(500).json({
                "message": "Erro interno"
            });

        return res.status(200).json({
            "message": `Cliente [${data.nome}] alterado com sucesso`
        });
    });
}

const selecionarCliente = (req, res) => {
    Cliente.find({}, null, { sort: { nome: 1 } }, (err, data) => {

        if (err)
            return res.status(500).json({
                "message": "Erro interno"
            })

        return res.status(200).json(data);
    });

}

const selecionarClientePorId = (req, res) => {
    Cliente.findById(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                "message": "Erro interno"
            })
        }
  
        return res.status(200).json(data);

    });

}

const excluirCliente = (req, res) => {
    Cliente.findByIdAndRemove(new ObjectId(req.params.id), (err, data) => {
        if (err) {
            return res.status(500).json({
                "message": "Erro interno"
            })
        }

        return res.status(200).json({
            "message": `Cliente [${data.nome}] excluido com sucesso`
        });
    });
}

const totalClientes = (req, res) => {

    let ativos = 0;
    let inativos = 0;
    Cliente.count({status: true}, function( err, count){
        if (err) {
            return res.status(500).json({
                "message": "Erro interno"
            })
        }
        ativos = count;
    }).then(

    Cliente.count({status: false}, function( err, count){
        if (err) {
            return res.status(500).json({
                "message": "Erro interno"
            })
        }
        inativos = count;
    })).then(() => {

        return res.status(200).json({ativos: ativos, inativos: inativos});
        
    });

}

module.exports = {
    inserirCliente,
    selecionarCliente,
    selecionarClientePorId,
    alterarCliente,
    excluirCliente,
    totalClientes
}