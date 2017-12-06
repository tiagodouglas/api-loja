module.exports = (app) => {
    const categoria = require('../../core/Categoria/categoriaController');

    app.post('/categoria', (req, res) => {
        categoria.inserirCategoria(req, res);
    });

    app.get('/categoria', (req, res) => {
        categoria.selecionarCategoria(req, res);
    });

    app.get('/categoria/:id', (req, res) => {
        categoria.selecionarCategoriaPorId(req, res);
    });

    app.put('/categoria/:id', (req, res) => {
        categoria.alterarCategoria(req, res);
    });

    app.delete('/categoria/:id', (req, res) => {
        categoria.excluirCategoria(req, res);
    });
}