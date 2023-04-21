import express, { Request, Response } from 'express'

import { IRequestSearchByTermInput } from '../interfaces/Category.interface';
import categoryService from '../services/Category.service'
import FormatResponse from '../utils/FormatResponse';

const categoryController = express.Router();

categoryController.get('/category/searchByTerm', async (req: Request<null, null, null, IRequestSearchByTermInput>, res: Response) => {
    // #swagger.tags = ['category']
    // #swagger.description = 'Pesquisar categorias'

    /* #swagger.parameters['term'] = {
        description: 'Termo para buscar a categoria',
        type: 'string'
    } */

    const query = req.query;
    categoryService.searchByTerm(query.term).then((response) => {
        const data = FormatResponse.success(response.categoryList);
        res.send(data);
    }).catch((error: Error) => {
        const data = FormatResponse.error(error.message);
        res.send(500).send(data);
    });

    /* #swagger.responses[200] = { 
        schema: {
            data: [{
                idCategory: 0,
                name: 'nome',
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

export { categoryController };
