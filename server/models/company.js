// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Company', new Schema({
  _id:{type:mongoose.Schema.ObjectId},
  name: String,
  website: String,
  location: String,
  rating: Number,
  zip:Number,
  numOfEmployees:Number,
  avgSalary:Number,
  description: String
}));