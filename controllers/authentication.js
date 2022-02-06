const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer')
const sendGridTransport = require('nodemailer-sendgrid-transport');
const UserRepository = require('../repository/user-info').UserRepository;
const userRepository = new UserRepository();

const User = require('../models/user');



const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth: {
            api_key: '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'
        }
    })
);

exports.getLogIn = (req, res, next)=>{
    res.render('login/sign-in',{
        pageTitle : 'Log In',        
    })
}

exports.getSignUp = (req, res, next)=>{
    res.render('login/sign-up',{
        pageTitle : 'Registration',
        error: false,
        errorMessage: null
    })
}

exports.postSignUp = async (req, res, next )=>{
    

    const name = req.body.name;
    const email = req.body.email;
    const pass = req.body.pass;
    const re_pass = req.body.re_pass;
    const student = req.body.student;
    const teacher = req.body.teacher;
    const agree = req.body.agree;

    
    const _student = Boolean(student);
    const _teacher = Boolean(teacher);
    const _agree = Boolean(agree);

    
        
    if( !_agree || !( _agree && (_student ^ _teacher)) ){
        return res.render('login/sign-up',{
            pageTitle : 'Registration',
            error: true,
            errorMessage: 'Check again carefully..'
        })
    }  

    if( pass != re_pass ){
        return res.render('login/sign-up',{
            pageTitle : 'Registration',
            error: true,
            errorMessage: 'Check password again carefully..'
        })
    }  

    const user_repo = await userRepository.findByEmail(email);
    console.log(user_repo)


    if( user_repo.success && user_repo.data.length>0 ){
            
        return res.render('login/sign-up',{
            pageTitle : 'Registration',
            error: true,
            errorMessage: 'This Email exists already..'
        })

    } 
    let id = Math.floor(Math.random()*1000 ) + 0
    
    const know = await userRepository.addUser(id, name, email, pass );
    console.log(know)
    

    
    /*
    let user = User.findByEmail(email);
    console.log(user)

    if(user != true){
        return res.render('login/sign-up',{
            pageTitle : 'Registration',
            error: true,
            errorMessage: 'This Email exists already..'
        })
    }
*/
    

    res.redirect('/')
    
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