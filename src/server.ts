
import cors from 'cors'
import dotEnv from 'dotenv'
import express from 'express'
import swaggerUi from 'swagger-ui-express'

import { productController, categoryController } from './controllers/index'
import swaggerFile from './doc/swagger_doc.json'

// Configuração do servidor
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
dotEnv.config();

// Configuração das rotas
app.use(productController);
app.use(categoryController);

// Inicialização do servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}.`);
});
