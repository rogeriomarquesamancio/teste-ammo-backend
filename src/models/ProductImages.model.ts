const Sequelize = require('sequelize');
import { database, options } from '../database/Database'
import { productModel } from './Product.model'

const productImagesModel = database.define('productsimages', {
    idImage: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    idProduct: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    src: {
        type: Sequelize.TEXT('long'),
        allowNull: false,
    },
}, options);


productImagesModel.associate = () => {
    productImagesModel.belongsTo(productModel, { foreignKey: 'idProduct' });
};

export { productImagesModel };
