// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var arraySchema = new Schema({ name: String, price:String });
// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('City', new Schema({
  _id:{type:mongoose.Schema.ObjectId},
  name: String,
  state: String,
  country: String,
  zip: Number,
  restaurants:[arraySchema],
  markets:[arraySchema],
  rentPerMonth:[arraySchema],
  buyApartmentPrice:[arraySchema],
  salaries:[arraySchema],
  description: String
}));