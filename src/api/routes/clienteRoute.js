module.exports = (app) => {
    const cliente = require('../../core/Cliente/clienteController');

    app.post('/cliente', (req, res) => {
        cliente.inserirCliente(req, res);
    });

    app.get('/cliente', (req, res) => {
        cliente.selecionarCliente(req, res);
    });

    app.get('/totalCliente', (req, res) => {
        cliente.totalClientes(req, res);
    })

    app.get('/cliente/:id', (req, res) => {
        cliente.selecionarClientePorId(req, res);
    });

    app.put('/cliente/:id', (req, res) => {
        cliente.alterarCliente(req, res);
    });

    app.delete('/cliente/:id', (req, res) => {
        cliente.excluirCliente(req, res);
    });
}