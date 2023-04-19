const express = require('express');
const fr = require('../utils/FormatResponse');
const productService = require('../services/Product.service');
const productController = express.Router();

productController.get('/product/searchProduct', (req, res, next) => {
    // #swagger.tags = ['product']
    // #swagger.description = 'Pesquisar produtos'

    /* #swagger.parameters['term'] = {
        description: 'Termo para buscar o produto',
        type: 'string'
    } */

    /* #swagger.parameters['page'] = {
        description: 'Página de itens.',
        required: true,
        type: 'integer'
    } */

    /* #swagger.parameters['itens'] = {
        description: 'Quantidade de itens a buscar.',
        required: true,
        type: 'integer'
    } */

    const query = req.query;
    productService.searchProducts(query.term, query.page, query.itens).then((response) => {
        const data = fr.responseSucces(response);
        console.log(data)
        res.send(data);
    }).catch((error) => {
        const data = fr.responseError(error.message);
        res.status(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: [{
                idProduct: 0,
                name: 'nome',
                description: 'descricao',
                promotionalPrice: 'preco promocional',
                originalPrice: 'preco original',
                images: 'imagens',
                category: 'categoria',
            }],
            status: true
        },
        description: 'Sucesso.' 
    } */

    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro.' 
    } */
});



module.exports = productController;
