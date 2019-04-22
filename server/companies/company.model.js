const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    companyName: { type: String, unique: true, required: true },
    website: { type: String, required: true },
    cRate: { type: Number, required: true },
    zipcode: { type: Number, required: true },
    nemployees: { type: Number, required: true },
    avsalary: { type: Number, required: true },
    rent: { type: Number, required: true },
    cdescription: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Company', schema);