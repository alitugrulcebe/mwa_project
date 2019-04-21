const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/users'); // get our mongoose model
const app = express.Router();
var mongoose = require('mongoose');
require('dotenv').config();
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});





module.exports = app;