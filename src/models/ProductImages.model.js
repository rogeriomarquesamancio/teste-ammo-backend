"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productImagesModel = void 0;
const Sequelize = require('sequelize');
const Database_1 = require("../database/Database");
const Product_model_1 = require("./Product.model");
const productImagesModel = Database_1.database.define('productsimages', {
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
}, Database_1.options);
exports.productImagesModel = productImagesModel;
productImagesModel.associate = () => {
    productImagesModel.belongsTo(Product_model_1.productModel, { foreignKey: 'idProduct' });
};
