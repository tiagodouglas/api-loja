module.exports = (app) => {
    const marca = require('../../core/Marca/marcaController');

    app.post('/marca', (req, res) => {
        marca.inserirMarca(req, res);
    });

    app.get('/marca', (req, res) => {
        marca.selecionarMarca(req, res);
    });

    app.get('/marca/:id', (req, res) => {
        marca.selecionarMarcaPorId(req, res);
    });

    app.put('/marca/:id', (req, res) => {
        marca.alterarMarca(req, res);
    });

    app.delete('/marca/:id', (req, res) => {
        marca.excluirMarca(req, res);
    });
}