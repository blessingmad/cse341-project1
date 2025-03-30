const dotenv = require('dotenv'); // import dotenv to load enviriment variaples.
dotenv.config();// load the enviroment variable from a .env file

const MongoClient = require('mongodb').MongoClient; // import mongo client from MongoDB  package.

let database; // variable to hold the database

// function to initiate the database
const initDb = (callback) => {
    //check if the database is already initialized
    
    if (database) {
        console.log('db is initalized');
        return callback(null, database);
    }
    // connect to MongoDB url
    MongoClient.connect(process.env.MONGODB_URL)
    .then((client) => {
        database = client.db('Project1'); // store the MongoDB client instance and database reference
        callback(null,database); // callback with the database instance
    })
    .catch((err) => {
        console.error ('Database connection errors', err); // log connection errors
        callback(err); // callback with the error.
    });

};
// function to get the database instance (throw an error if not initialized)
const getDatabase = () => {
    if (!database) {
        throw Error('Database not initalized'); // through error if database is not initialized
    }
    return database; // return database instance
};

module.exports = {
    initDb, // export initDb function to initialize the database
    getDatabase // export getDatabase function to retrieve the database instance
};