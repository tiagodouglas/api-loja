module.exports = (app) => {
    const vendedor = require('../../core/Vendedor/vendedorController');

    app.post('/vendedor', (req, res) => {
        vendedor.inserirVendedor(req, res);
    });

    app.get('/vendedor', (req, res) => {
        vendedor.selecionarVendedor(req, res);
    });

    app.get('/vendedor/:id', (req, res) => {
        vendedor.selecionarVendedorPorId(req, res);
    });

    app.put('/vendedor/:id', (req, res) => {
        vendedor.alterarVendedor(req, res);
    });

    app.delete('/vendedor/:id', (req, res) => {
        vendedor.excluirVendedor(req, res);
    });
}