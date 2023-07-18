const express = require('express');

const authController = require('./../controllers/authController')

const route = express.Router();
//route get for the signup 
route.get('/signup', authController.signup_get)
//route post for the signup 
route.post('/signup', authController.signup_post)
//route get  for the login 
route.get('/login', authController.login_get)
//route post for the login 
route.post('/login', authController.login_post)


module.exports = route;