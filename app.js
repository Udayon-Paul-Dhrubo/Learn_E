const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

const homeRoutes = require('./routes/home')
const authRoutes = require('./routes/authentication')
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(homeRoutes)
app.use(authRoutes)
app.use('/student', studentRoutes)
app.use('/teacher', teacherRoutes)

app.listen(4000)