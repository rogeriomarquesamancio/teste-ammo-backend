"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productModel = void 0;
const Sequelize = require('sequelize');
const Database_1 = require("../database/Database");
const ProductImages_model_1 = require("./ProductImages.model");
const productModel = Database_1.database.define('products', {
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
}, Database_1.options);
exports.productModel = productModel;
productModel.hasMany(ProductImages_model_1.productImagesModel, { foreignKey: 'idProduct' });
