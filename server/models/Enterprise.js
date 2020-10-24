const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
const mongodbErrorHandler = require('mongoose-mongodb-errors');

const enterpriseSchema = new mongoose.Schema({

    "date": {
        "type": Date,
        "default": Date.now()
    },
    "File ID": String,
    "Company Name": String,
    "Year Of Approval": String,
    "Main Cluster": String,
    "CoreActivities": String
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


module.exports = mongoose.model('Enterprise', enterpriseSchema);