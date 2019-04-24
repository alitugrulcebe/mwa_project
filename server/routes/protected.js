const express = require('express');
const app = express.Router();
var mongoose = require('mongoose');
const City = require('../models/city');
const Company = require('../models/company');
const User = require('../models/users');
require('dotenv').config();
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});


app.get('/setupCompanies', (req, res) => {
  const companies = [
    {name: 'Facebook', website: 'www.facebook.com', location: 'New York', rating: 4},
    {name: 'Google', website: 'www.google.com', location: 'Los Angeles', rating: 5},
    {name: 'Amazon', website: 'www.amazon.com', location: 'Seattle', rating: 5},
    {name: 'MicroSoft', website: 'www.microsoft.com', location: 'Seattle', rating: 5},
    {name: 'Tencent', website: 'www.tencent.com', location: 'Los Angeles', rating: 5},
    {name: 'Huawei', website: 'www.huawei.com', location: 'Miami', rating: 5},
    {name: 'Alibaba', website: 'www.alibaba.com', location: 'San Diego', rating: 5},
    {name: 'Linkedin', website: 'www.linkedin.com', location: 'Houston', rating: 5},
    {name: 'Oracle', website: 'www.oracle.com', location: 'New York', rating: 5},
    {name: 'Intel', website: 'www.intel.com', location: 'Portland', rating: 5},
  ];

  Company.collection.insert(companies, (err, docs) => {
    if (err) {
      return console.error(err);
    } else {
      console.log("Multiple documents inserted to Collection");
    }
  });


});

app.get('/setupCities', function (req, res) {

  // create a sample city
  var city = new City({
    name: 'Houston',
    state: 'CA',
    country: 'USA',
    zipCode: 53223,
    restaurants: [
      {name: 'Meal, Inexpensive Restaurant', price: '11.00 $'},
      {name: 'Meal for 2 People, Mid-range Restaurant, Three-course', price: '42.00 $'},
      {name: 'McMeal at McDonalds (or Equivalent Combo Meal)', price: '7.00 $'},
      {name: 'Domestic Beer (1 pint draught)', price: '3.99 $'},
      {name: 'Imported Beer (12 oz small bottle)', price: '4.50 $'}
    ],
    markets: [
      {name: 'Milk (regular), (1 gallon)', price: '3.56 $'},
      {name: 'Loaf of Fresh White Bread (1 lb)', price: '2.00 $'},
      {name: 'Rice (white), (1 lb)', price: '1.66 $'},
      {name: 'Eggs (regular) (12)', price: '1.32 $'},
      {name: 'Local Cheese (1 lb)', price: '4.43 $'}
    ],
    rentPerMonth: [
      {name: 'Apartment (1 bedroom) in City Centre', price: '1872.48 $'},
      {name: 'Apartment (1 bedroom) Outside of Centre', price: '1677.22 $'},
      {name: 'Apartment (3 bedrooms) in City Centre', price: '2,673.00 $'},
      {name: 'Apartment (3 bedrooms) Outside of Centre', price: '2,342.44 $'}
    ],
    buyApartmentPrice: [
      {name: 'Price per Square Feet to Buy Apartment in City Centre', price: '469.25 $'},
      {name: 'Price per Square Feet to Buy Apartment Outside of Centre', price: '445.50 $'}
    ],
    salaries: [
      {name: 'Average Monthly Net Salary (After Tax)', price: '4,316.95 $'},
      {name: 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate', price: '4.51'}
    ],
    description: "Big City"
  });

  city.save(function (err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({success: true});
  });
});

app.post('/city', function (req, res, next) {
  City.find({'name': req.body.name})
    .exec()
    .then(cities => {
      res.status(201).json({
        cities: cities
      })
    });
});

app.get('/cities', function (req, res, next) {
  City.find({})
    .exec()
    .then(cities => {
      res.status(201).json(cities);
    });
});

app.post('/cities', function (req, res, next) {
  City.find({'name':req.body.city})
    .exec()
    .then(cities => {
      res.status(201).json(cities);
    });
});

app.post('/company', function (req, res) {
  Company.find({'location':req.body.city})//.select('+_id')
    .exec()
    .then(companies => {
      res.status(201).json(companies)
    }).catch(err => {
    res.status(500).json({
      error: err
    })
  });
});

app.get('/companies', function (req, res) {
  Company.find({})
    .exec()
    .then(companies => {
      res.status(201).json(companies);
    }).catch(err => {
    res.status(500).json({
      error: err
    })
  });
});

app.post('/createCompany', function (req, res) {
  let company = new Company({
    name: req.body.name,
    website: req.body.website,
    location: req.body.location,
    rating: req.body.rating,
    zipCode:req.body.zipCode,
    employeesNumber:req.body.employeesNumber,
    companyAvgSalary:req.body.companyAvgSalary,
    companyDesc: req.body.companyDesc
  });

  company.save(function (err) {
    if (err) throw err;

    console.log('Company saved successfully');
    res.json({success: true});
  });
});

app.get('/companies/:id', function (req, res) {
  Company.findOne({_id:req.params.id})
    .exec()
    .then(companies => {
      res.status(201).json(companies);
    }).catch(err => {
    res.status(500).json({
      error: err
    })
  });
});

app.get('/users/:id', function (req, res) {
  User.findOne({_id:req.params.id})
    .exec()
    .then(user => {
      res.status(201).json(user);
    }).catch(err => {
    res.status(500).json({
      error: err
    })
  });
});

app.put('/user/', function (req, res) {
  User.findOne({_id:req.body.id})
    .exec()
    .then(user => {
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastName;
      user.emai = req.body.email;
      user.save();
      res.status(201).json(user);
    }).catch(err => {
    res.status(500).json({
      error: err
    })
  });
});

app.delete('/users/:id', function (req, res) {
  User.findOne({_id:req.params.id})
    .exec()
    .then(user => {
      user.delete();
      res.status(201).json({
        message:'User deleted successfully'
      });
    }).catch(err => {
    res.status(500).json({
      error: err
    })
  });
});

module.exports = app;