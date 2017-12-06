module.exports = (app) => {
    const produto = require('../../core/Produto/produtoController');

    app.post('/produto', (req, res) => {
        produto.inserirProduto(req, res);
    });

    app.get('/produto', (req, res) => {
        produto.selecionarProduto(req, res);
    });

    app.get('/produto/:id', (req, res) => {
        produto.selecionarProdutoPorId(req, res);
    });

    app.put('/produto/:id', (req, res) => {
        produto.alterarProduto(req, res);
    });

    app.delete('/produto/:id', (req, res) => {
        produto.excluirProduto(req, res);
    });
}