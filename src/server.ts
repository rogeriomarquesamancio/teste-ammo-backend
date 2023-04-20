
import cors from 'cors'
import dotEnv from 'dotenv'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './doc/swagger_doc.json'
import { productController } from './controllers'


// Configuração do servidor
const app = express();
dotEnv.config();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Configuração das rotas
app.use(productController);

// Inicialização do servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}.`);
});
