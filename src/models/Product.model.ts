const Sequelize = require('sequelize');
import { database, options } from '../database/Database'
import { productImagesModel } from './ProductImages.model';

const productModel = database.define('products', {
    idProduct: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    originalPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    promotionalPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, options);

productModel.hasMany(productImagesModel, { foreignKey: 'idProduct' });

export { productModel };
