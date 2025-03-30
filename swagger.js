const swaggerAutogen = require ('swagger-autogen')(); // import swagger autogenerator

// define the swagger documentation
const doc = {
    info: { 
        title: 'Users Api', // API Title
        description: 'Users Api' // description
    },
    host: 'cse341-project1-1-nwc5.onrender.com', // localhost
    schemes: ['https', 'http'] // supported protocols
};

const outputFile = './swagger.json'; // Specify the output file for the generated Swagger JSON
const endpointsFiles = ['./routes/index.js']; // Define the entry point for route scanning 

swaggerAutogen(outputFile, endpointsFiles, doc); // generate the swagger documentation based on routes
