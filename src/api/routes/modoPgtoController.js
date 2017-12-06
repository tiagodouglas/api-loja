module.exports = (app) => {
    const modoPgto = require('../../core/ModoPgto/modoPgtoController');

    app.post('/modoPgto', (req, res) => {
        modoPgto.inserirModoPgto(req, res);
    });

    app.get('/modoPgto', (req, res) => {
        modoPgto.selecionarModoPgto(req, res);
    });

    app.get('/modoPgto/:id', (req, res) => {
        modoPgto.selecionarModoPgtoPorId(req, res);
    });

    app.put('/modoPgto/:id', (req, res) => {
        modoPgto.alterarModoPgto(req, res);
    });

    app.delete('/modoPgto/:id', (req, res) => {
        modoPgto.excluirModoPgto(req, res);
    });
}