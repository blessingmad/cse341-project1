const express = require ('express');

const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3001;


//app.use('/', require('./routes'));

mongodb.intDb((err => {
    if (err){
        console.log;
    }
    else {
        console.log(`Database is listening at and node running on port ${port}`);
    }
}));


app.listen (port, () => {console.log(`Running on port ${port}`)});
