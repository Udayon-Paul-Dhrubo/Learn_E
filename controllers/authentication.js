const bcrypt = require('bcryptjs');

const nodemailer = require('nodemailer')
const fileupload = require('express-fileupload')
const multer = require('multer')
const upload = multer({ dest: 'upload/' })

const sendGridTransport = require('nodemailer-sendgrid-transport');
const UserRepository = require('../repository/user-info').UserRepository;
const userRepository = new UserRepository();





const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: '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'
        }
    })
);

exports.getSignOut = (req, res, next) => {
    res.redirect('/')
}

exports.getLogIn = (req, res, next) => {
    res.render('login/sign-in', {
        pageTitle: 'Log In',
        path: '/login',
        error: 'false',
        isStudent: 'false',
        logged_in: 'false',
        errorMessage: '',

    })
}

exports.postLogIn = async(req, res, next) => {
    const email = req.body.email;
    const pass = req.body.pass;

    const user_repo = await userRepository.findByEmail(email, pass);
    // console.log(user_repo.data[0]);

    if (user_repo.data.length != 0) {



        if (user_repo.success && user_repo.data.length > 0) {

            const student_repo = await userRepository.isStudent(email);
            console.log(student_repo);
            if (student_repo.success && student_repo.data.length > 0) {
                const student = student_repo.data[0];
                console.log(student);

                const url = '/student/user/' + student.Student_id + '/';
                return res.redirect(url);
            }

            const teacher_repo = await userRepository.isTeacher(email);
            console.log(teacher_repo);
            if (teacher_repo.success && teacher_repo.data.length > 0) {
                const teacher = teacher_repo.data[0];
                console.log(teacher);

                const url = '/teacher/user/' + teacher.Teacher_ID + '/';
                return res.redirect(url);
            }

        }


    }

    msg = 'Please try again';
    res.render('login/sign-in', {
        pageTitle: 'Log In',
        path: '/login',
        error: true,
        isStudent: 'false',
        logged_in: 'false',
        eror: 'true',
        errorMessage: msg
    })
}





exports.getSignUp = (req, res, next) => {
    res.render('login/sign-up', {
        pageTitle: 'Registration',
        path: '/login',
        error: false,
        errorMessage: null,
        isStudent: 'false',
        logged_in: 'false',
    })
}

exports.postSignUp = async(req, res, next) => {


    const name = req.body.name;
    console.log(name);
    const email = req.body.email;
    const pass = req.body.pass;
    console.log(pass);
    const re_pass = req.body.re_pass;
    //  const img = req.body.uploaded_image;
    const student = req.body.student;
    const teacher = req.body.teacher;
    const agree = req.body.agree;
    console.log(email);
    console.log(req.body.uploaded_image);
    console.log(typeof(req.body.uploaded_image));
    if (req.files) console.log("some file was uploaded ");
    else console.log("no file found");
    var file = req.files.uploaded_image;
    var img_name = file.name;
    console.log(img_name);
    file.mv('public/img/' + file.name);





    const _student = Boolean(student);
    const _teacher = Boolean(teacher);
    const _agree = Boolean(agree);



    if (!_agree || !(_agree && (_student ^ _teacher))) {
        return res.render('login/sign-up', {
            pageTitle: 'Registration',
            path: '/login',
            error: true,
            errorMessage: 'Check again carefully..',
            isStudent: 'false',
            logged_in: 'false',
        })
    }

    if (pass != re_pass) {
        return res.render('login/sign-up', {
            pageTitle: 'Registration',
            path: '/login',
            error: true,
            errorMessage: 'Check password again carefully..',
            isStudent: 'false',
            logged_in: 'false',
        })
    }

    const user_repo = await userRepository.findByEmail(email);
    console.log(user_repo)
    console.log("finished searching for email id in database")


    if (user_repo.success && user_repo.data.length > 0) {

        return res.render('login/sign-up', {
            pageTitle: 'Registration',
            path: '/login',
            error: true,
            errorMessage: 'This Email exists already..',
            isStudent: 'false',
            logged_in: 'false',
        })

    }
    console.log("looking for a new user id")
    const id_repo = await userRepository.last_user_id_inserted();
    console.log('here : ')
    console.log(id_repo);

    let id;
    if (id_repo.success) {
        id = id_repo.data[0].id + 1;
        console.log('id ; ', id);
    } else {
        return res.render('login/sign-up', {
            pageTitle: 'Registration',
            path: '/login',
            error: true,
            errorMessage: 'Something went wrong..pls try again..',
            isStudent: 'false',
            logged_in: 'false',
        })
    }

    const know = await userRepository.addUser(id, name, email, pass, _student, img_name);
    console.log(know)

    if (know.success == 'false') {
        return res.render('login/sign-up', {
            pageTitle: 'Registration',
            path: '/login',
            error: true,
            errorMessage: 'There are some problems..Try again later',
            isStudent: 'false',
            logged_in: 'false',
        })
    } else {

        let url = '';
        if (_student) url = url + '/student';
        else url = url + '/teacher';

        url = url + '/user/' + id + '/';

        return res.redirect(url);

    }


}







/*
var express=require('express');
var nodemailer = require("nodemailer");
var app=express();

    //Here we are configuring our SMTP Server details.
    //STMP is mail server which is responsible for sending and recieving email.

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "Your Gmail ID",
        pass: "Gmail Password"
    }
});
var rand,mailOptions,host,link;
//------------------SMTP Over-----------------------------

//------------------Routing Started ------------------------

app.get('/',function(req,res){
    res.sendfile('index.html');
});
app.get('/send',function(req,res){
        rand=Math.floor((Math.random() * 100) + 54);
    host=req.get('host');
    link="http://"+req.get('host')+"/verify?id="+rand;
    mailOptions={
        to : req.query.to,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function(error, response){
     if(error){
            console.log(error);
        res.end("error");
     }else{
            console.log("Message sent: " + response.message);
        res.end("sent");
         }
});
});

app.get('/verify',function(req,res){
console.log(req.protocol+":/"+req.get('host'));
if((req.protocol+"://"+req.get('host'))==("http://"+host))
{
    console.log("Domain is matched. Information is from Authentic email");
    if(req.query.id==rand)
    {
        console.log("email is verified");
        res.end("<h1>Email "+mailOptions.to+" is been Successfully verified");
    }
    else
    {
        console.log("email is not verified");
        res.end("<h1>Bad Request</h1>");
    }
}
else
{
    res.end("<h1>Request is from unknown source");
}
});

//--------------------Routing Over----------------------------

app.listen(3000,function(){
    console.log("Express Started on Port 3000");
}); */