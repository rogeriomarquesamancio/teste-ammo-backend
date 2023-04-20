"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = exports.database = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize = require('sequelize');
dotenv_1.default.config();
function createConnection() {
    if (process.env.DATABASE === 'mysql') {
        return new sequelize('ammovarejodb', process.env.USER, process.env.PASSWORD, {
            dialect: 'mysql',
            host: 'localhost'
        });
    }
}
const database = createConnection();
exports.database = database;
const options = {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
};
exports.options = options;