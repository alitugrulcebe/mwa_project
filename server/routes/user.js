const express = require('express');
const app = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User   = require('../models/users'); // get our mongoose model
require('dotenv').config();
var mongoose    = require('mongoose');
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens
mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true });




app.post('/signup',function (req,res,next) {
  User.find({email:req.body.email})
    .exec()
    .then(user => {
      if(user.length >= 1) {
        res.status(409).json({
          message: 'User exist'
        })
      } else {
        bcrypt.hash(req.body.password,10,(err,hash) => {
          if(err) {
            return res.status(500).json({
              error:err
            })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              email: req.body.email,
              password: hash
            });
            user
              .save()
              .then(result => {
                res.status(201).json({
                  message:'User created'
                })
              })
              .catch(err => {
                res.status(500).json({
                  err:err
                })
              })
          }
        })
      }
    })
    .catch(err => {
      res.status(500).json({
        message:'User creation failed'
      })
    })


});

app.delete('/:userid',(req,res,next)=>{
  User.remove({_id:req.params.id})
    .exec()
    .then(res=>{
      res.status(200).json({
        message: 'User deleted'
      })
    })
    .catch(err => {
      res.status(500).json({
        error:err
      })
    })
});

app.post('/login',(req,res,next) => {
  User.find({email:req.body.email}).select('+_id')
    .exec()
    .then(users => {
      if(users.length < 1) {
        res.status(401).json({
          message:'Auth failed'
        });
      }
      bcrypt.compare(req.body.password,users[0].password,(err,result) => {
        if(err) {
          res.status(401).json({
            message:'Auth failed'
          });
        }

        if(result) {
          const token = jwt.sign({
              email:users[0].email,
              userId:users[0]._id
            },
            process.env.JWT_KEY,
            {
              expiresIn: "1h"
            });
          return res.status(200).json({
            message:'Auth successfull',
            id: users[0]._id,
            username:users[0].firstname + " " + users[0].lastname,
            token: token,
            admin:users[0].isAdmin
          });
        }

        res.status(401).json({
          message:'Auth failed'
        });
      })
    })
    .catch(err => {
      res.status(500).json({
        error:err
      })
    })
});

module.exports = app ;
