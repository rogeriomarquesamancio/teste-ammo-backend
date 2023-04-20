"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_model_1 = require("./../models/Product.model");
const ProductImages_model_1 = require("./../models/ProductImages.model");
function searchProducts(term = '', page, amoutItems) {
    return __awaiter(this, void 0, void 0, function* () {
        term = `%${term}%`;
        page = page - 1;
        amoutItems = amoutItems;
        const data = yield Product_model_1.productModel.findAndCountAll({
            offset: Number(page * amoutItems),
            limit: Number(amoutItems),
            include: {
                model: ProductImages_model_1.productImagesModel,
            },
        });
        const pageCount = data.count >= 1 ? Math.ceil(data.count / amoutItems) : 0;
        return {
            productList: data.rows,
            pageCount: pageCount,
        };
    });
}
exports.default = { searchProducts };
