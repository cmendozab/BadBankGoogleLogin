var express = require('express');
var app = express();
var cors = require('cors');

// This is used to server static files from public directory
app.use(express.static('public'));
app.use(cors());

// Create user account
app.get('/account/create/:name/:email/:password', function (req,res) {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    });
});

// Login User
app.get('/account/login/:email/:password', function (req, res) {
    res.send({
        email: req.params.email,
        password: req.params.password
    });
});

//All Acounts
app.get('/account/all', function (req,res) {
    res.send({
        name: 'peter',
        email: 'peter@mit.edu',
        password: 'secret'
    });
});

//Deposit

//Withdraw

//Balance

var port = 3000;
app.listen(port);
console.log('Running on port: ' + port);