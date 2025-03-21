const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('Project1').collection('users').find();
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users);
    });

};

const getSingle = async (req, res) => {
    if (!ObjectId.isValid (req.params.id )){
        return res.status(400).json({err:'Invalid id formart'});
    }
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('Project1').collection('users').find( {_id: userId});
    result.toArray().then((users) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(users[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};