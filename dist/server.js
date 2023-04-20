"use strict";
const cors = require('cors');
const dotEnv = require('dotenv');
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const squelize = require('sequelize');
const { database } = require('./database/Database');
const swaggerFile = require('./doc/swagger_doc.json');
const { productController } = require('./controllers');
const app = express();
dotEnv.config();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(productController);
database.authenticate().then(() => {
    console.log('Conectado ao banco com sucesso!');
    return database.sync();
}).then(() => {
    console.log('Banco de dados sincronizado!');
}).catch(() => {
    console.log('Erro ao conectar ao banco.');
});
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});
