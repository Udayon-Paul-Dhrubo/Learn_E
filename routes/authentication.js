const express = require('express');

const authController = require('../controllers/authentication')

//const router = express.Router()
const router = require('express-promise-router')()

router.get('/log-in', authController.getLogIn)

router.post('/log-in', authController.postLogIn)

router.get('/sign-up', authController.getSignUp)

router.post('/sign-up', authController.postSignUp)

router.get('/sign-out', authController.getSignOut)




module.exports = router