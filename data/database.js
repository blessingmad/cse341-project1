const dotenv = require('dotenv');
dotenv.config();

const mongoClient = require ('mongodb').mongoClient;

let database;

const initDb = (callback) => {
    if (database){
        console.log('Db is already initialized');
        return callback (null, database);
    }
    mongoClient.connect(processt.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        }) 
        .catch ((err) => {
            callback(err);

        });

};

const getDatabase = () => {
    if (!database) {
        throw Error ('Database is not initialized')
    } 
    return database;
};

module.exports = {
    initDb,
    getDatabase
};
