const express = require('express');

const authController = require('../controllers/authentication')

//const router = express.Router()
const router = require('express-promise-router')()

router.get('/log-in', authController.getLogIn )

router.get('/sign-up', authController.getSignUp )

router.post('/sign-up', authController.postSignUp )




module.exports = router