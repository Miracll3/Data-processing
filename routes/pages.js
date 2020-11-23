const express = require("express");
const passport = require('passport');
const session = require('express-session');
const mysql = require("mysql");
const upload = require('express-fileupload');


const router = express.Router();

//File upload



//File upload

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


const redirectHome=(req,res, next) => {
    const userID=1;
    console.log(userID);
    if(req.session){
        res.redirect('/profile')
    }
    next()
}




router.get('/', (req, res) => {
    res.render('index');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/login', redirectHome,(req, res) => {
    res.render('login');
})

router.get('/profile', (req, res) => {
    res.render('profile', {name: 'Smanga'});

})

function checkAuth(req, res, next){
    if(req.isAuthenticated()){
        console.log("Authanticated...")
        return next()
    }
    console.log("Not Authanticated...")
    res.redirect('/')
}
function checkNotAuth(req, res, next){
    if(req.isAuthenticated()){
        return res.redirect('/profile')
    }
   next()
}

module.exports = router;