const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users'); // get our mongoose model
const app = express.Router();
var mongoose = require('mongoose');
//const City = require('city');
require('dotenv').config();
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });


/*
app.post('/city', function (req, res, next) {
    City.find({}, { 'name': req.body.name })
        .exec()
        .then(cities => {
            res.status(201).json({
                cities: cities
            })
        });
});
*/

module.exports = app;