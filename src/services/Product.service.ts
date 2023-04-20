import { Op } from 'sequelize'
import { Sequelize } from 'sequelize'
import { productModel } from './../models/Product.model'
import { productImagesModel } from './../models/ProductImages.model'

async function searchProducts(term = '', page: number, amoutItems: number) {
    term = `%${term}%`;
    page = page - 1;
    amoutItems = amoutItems;

    const data = await productModel.findAndCountAll({
        offset: Number(page * amoutItems),
        limit: Number(amoutItems),
        include: {
            model: productImagesModel,
        },
    });

    const pageCount = data.count >= 1 ? Math.ceil(data.count / amoutItems) : 0;

    return {
        productList: data.rows,
        pageCount: pageCount
    };
}


export default { searchProducts }
