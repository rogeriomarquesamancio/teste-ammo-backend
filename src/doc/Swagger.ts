const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        version: '1.0.0',
        title: 'Ammo Varejo RestAPI',
        description: 'Teste prático para o grupo Ammo Varejo.',
    },
    host: 'localhost:3001',
    schemes: ['http']
};

const endpointsFiles = [
    './src/controllers/Product.controller.ts',
    './src/controllers/Category.controller.ts',
];

const outputFile = './src/doc/swagger_doc.json';

swaggerAutogen(outputFile, endpointsFiles, doc);
