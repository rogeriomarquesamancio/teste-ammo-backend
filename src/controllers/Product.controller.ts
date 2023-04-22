import express, { Request, Response } from 'express'

import { IRequestSearchProductInput } from '../interfaces/Product.interface';
import productService from '../services/Product.service'
import FormatResponse from '../utils/FormatResponse';

const productController = express.Router();

productController.get('/product/searchProduct', async (req: Request<null, null, null, IRequestSearchProductInput>, res: Response) => {
    // #swagger.tags = ['product']
    // #swagger.description = 'Pesquisar produtos'

    /* #swagger.parameters['term'] = {
        description: 'Termo para buscar o produto (Exemplo: Kit Cama)',
        type: 'string'
    } */

    /* #swagger.parameters['page'] = {
        description: 'Página dos itens',
        required: true,
        type: 'integer'
    } */

    /* #swagger.parameters['itens'] = {
        description: 'Quantidade de itens a buscar',
        required: true,
        type: 'integer'
    } */

    const query = req.query;
    productService.searchProducts(query.term, query.page, query.itens).then((response) => {
        const data = FormatResponse.success(response);
        res.status(200).json(data);
    }).catch((error: Error) => {
        const data = FormatResponse.error(error.message);
        res.status(500).json(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: [{
                idProduct: '0',
                name: 'nome',
                description: 'descricao',
                promotionalPrice: 'preco promocional',
                originalPrice: 'preco original',
                idCategory: 'id da categoria',
                images: [
                    {
                        idImage: 0,
                        idProduct: 0,
                        src: 'caminho para a imagem'
                    }
                ],
                category: {
                    idCategory: 'id categoria',
                    name: 'nome da categoria'
                },
            }],
            status: true
        },
        description: 'Sucesso' 
    } */
    
    /* #swagger.responses[500] = { 
        schema: {
            msg: 'Mensagem de erro.',
            status: false
        },
        description: 'Erro' 
    } */

});

export { productController };
