import dotEnv from 'dotenv'
const sequelize = require('sequelize');

dotEnv.config();

function createConnection() {
    if (process.env.DATABASE === 'mysql') {
        return new sequelize('AmmoVarejoDB', process.env.USER, process.env.PASSWORD, {
            dialect: 'mysql',
            host: 'localhost'
        });
    }
}

const database = createConnection();

const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
}

export {
    database,
    options
};
