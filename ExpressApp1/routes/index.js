'use strict';
var express = require('express');
const { connect } = require('mongodb');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

router.post('/', function (req, res) {
    console.log("ciao a tutti cazzoni");
    console.log("EMAIL: ");

    var first_name = req.body.first_name;
    var last_name = req.body.last_name;
    var birthday = req.body.birthday;
    var gender = req.body.gender;
    var phone = req.body.phone;
    var subject = req.body.subject;

    console.log(first_name);
    console.log(last_name);
    console.log(birthday);
    console.log(gender);
    console.log(phone);
    console.log(subject);


    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'myapp'
    });

    connection.connect(function (err) {
        if (err) {
            console.log('error when connecting to db:', err);
        } 
    });

    connection.query("INSERT INTO users(first_name, last_name, phone) VALUES (?,?,?);",[first_name, last_name, phone], function (err, result) {
        console.log("QUERY FATTATATAT");
    });
   

    console.log(connection.state);

    


    res.redirect('/');
});

module.exports = router;
