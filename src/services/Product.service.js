const { Op } = require('sequelize');
const productModel = require('./../models/Product.model');

async function searchProducts(term = '', page, amoutItems) {
    term = `%${term}%`;
    page = parseInt(page) - 1;
    amoutItems = parseInt(amoutItems);

    const data = await productModel.findAndCountAll({
        offset: page * amoutItems,
        limit: amoutItems,
        where: {
            name: { [Op.like]: term },
        }
    });

    const pageCount = data.count >= 1 ? Math.ceil(data.count / amoutItems) : 0;

    return {
        productList: data.rows,
        pageCount: pageCount
    };
}


module.exports = {
    searchProducts,
}
