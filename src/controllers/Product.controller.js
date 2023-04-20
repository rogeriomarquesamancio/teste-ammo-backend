"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const express_1 = __importDefault(require("express"));
const FormatResponse_1 = __importDefault(require("../utils/FormatResponse"));
const Product_service_1 = __importDefault(require("../services/Product.service"));
const productController = express_1.default.Router();
exports.productController = productController;
productController.get('/product/searchProduct', (req, res) => {
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
    Product_service_1.default.searchProducts(query.term, query.page, query.itens).then((response) => {
        const data = FormatResponse_1.default.responseSucces(response);
        res.send(data);
    }).catch((error) => {
        const data = FormatResponse_1.default.responseError(error.message);
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
