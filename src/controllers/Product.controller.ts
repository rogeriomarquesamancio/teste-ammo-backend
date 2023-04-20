import express from 'express'
import fr from '../utils/FormatResponse'
import productService from '../services/Product.service'
import { productImagesModel } from '../models/ProductImages.model'

const productController = express.Router();

productController.get('/product/searchProduct', (req: any, res: any, next) => {
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
    productService.searchProducts(query.term, query.page, query.itens).then((response: any) => {
        const data = fr.responseSucces(response);
        res.send(data);
    }).catch((error: any) => {
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


productController.get('/product/searchProductImages', (req: any, res: any, next) => {
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
    productService.searchProducts(query.term, query.page, query.itens).then(async (response: any) => {

        const data2 = await productImagesModel.findAndCountAll({
            offset: Number(1 * 1),
            limit: Number(1),
            include: {
                model: productImagesModel,
            },
        });

        
        const data = fr.responseSucces(response);
        res.send(data2);
    }).catch((error: any) => {
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

export { productController };
