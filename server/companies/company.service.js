const db = require('middleware/db');
const Company = db.Company;

module.exports = {
    create,
    delete: _delete
};

async function create(companyParam) {
    // validate
    if (await Company.findOne({ companyname: companyParam.companyname })) {
        throw 'Company "' + companyParam.companyname + '" is already in the database';
    }
    const compnay = new Company(companyParam);
    // save company
    await company.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}