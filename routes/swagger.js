const router = require('express').Router(); // Import Express Router.
const swaggerUi = require('swagger-ui-express');// import swagger UI middleware
const swaggerDocument = require('../swagger.json'); // import the Swagger documentation JSON file
router.use('/api-docs', swaggerUi.serve); // serve swagger UI at '/api-docs' endpoint
router.use('/api-docs', swaggerUi.setup(swaggerDocument)); // setup swagger UI with the provided Swagger document

module.exports = router; // export the router to be used in the main app