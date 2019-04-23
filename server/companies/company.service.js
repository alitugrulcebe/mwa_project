const db = require('middleware/db');
const Company = db.Company;

module.exports = {
    create
};

async function create(companyParam) {
    // validate
    if (await Company.findOne({ companyname: companyParam.companyname })) {
        throw 'Company "' + companyParam.companyname + '" is already in the database';
    }
    const company = new Company(companyParam);
    // save company
    await company.save();
}

