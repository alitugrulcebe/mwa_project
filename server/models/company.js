// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({ userId: String, comment:String });
// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Company', new Schema({
  name: String,
  website: String,
  location: String,
  rating: Number,
  zipCode:Number,
  employeesNumber:Number,
  companyAvgSalary:Number,
  companyDesc: String
}));