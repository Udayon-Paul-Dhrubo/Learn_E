const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/authentication')
const studentRoutes;
const teacherRoutes;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoutes)
app.use(authRoutes)

app.listen(3000)