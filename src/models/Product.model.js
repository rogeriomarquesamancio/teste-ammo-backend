const Sequelize = require('sequelize');
const { database, options } = require('../database/Database');

const Product = database.define('products', {
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
    images: {
        type: Sequelize.TEXT('long'),
        allowNull: false
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false
    },
}, options);

module.exports = Product;
