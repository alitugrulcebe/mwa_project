'use strict'

const express = require('express');
const cors = require('cors');
const app = express();
const url = require('url');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const checkAuth = require('./middleware/check_auth.js');
require('dotenv').config();


var validateRequest = (req, res,next) => {
  return (req, res, next) => {
    //Validate if request has a valid JSON
    console.log('Validating request JSON', req.body, req.method)
    if (req.method === 'POST' && req.body === undefined)
      res.json({ message: 'Error occured in parsing the request' })
    else {
      req.lab8 = req.body;
      next();
    }
  } 
}

app.set('superSecret', process.env.JWT_KEY); // secret variable
app.use(cors());
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(logger('combined', { stream: accessLogStream }))
//app.use(db())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(validateRequest());


app.use('/user',require('./routes/user.js'));
app.use('/protected',checkAuth,require('./routes/protected.js'));

app.listen(3000)
