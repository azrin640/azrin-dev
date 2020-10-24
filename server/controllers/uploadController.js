const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const enterprises = require('../json/intelligence/msc-data-2017.json');
const Enterprise = require('../models/Enterprise');

exports.uploadJsonFile = async(req, res) => {

    Enterprise.insertMany(enterprises, function(error, docs) {
        if (docs) res.json(docs);
        else res.json(error);
    });
}