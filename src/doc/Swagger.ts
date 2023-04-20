const swaggerAutogen = require('swagger-autogen');

const doc = {
    info: {
        version: '1.0.0',
        title: 'Ammo Varejo RestAPI',
        description: 'Somos responsáveis pelas operações de varejo das marcas Santista, ARTEX, Persono, mmartan e casa moysés!',
    },
    host: 'ammo-varejo-api.onrender',
    schemes: ['https']
};

const endpointsFiles = [
    './src/controllers/Product.controller.ts',
];

const outputFile = './src/doc/swagger_doc.json';

swaggerAutogen(outputFile, endpointsFiles, doc);
