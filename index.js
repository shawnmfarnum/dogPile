
//require

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var session = require('express-session'); //keeps you logged in.

var dogCtrl = require('./dogCtrl');
var config = require('./config.js');
var userCtrl = require('./userCtrl.js');

var app = express();

//middleware

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session(config));
app.use(express.static(__dirname + '/public'));

//endpoints

app.post('/login', userCtrl);

app.post('/dogs', dogCtrl.create);
app.get('/dogs', dogCtrl.read);
app.put('/dogs/:id', dogCtrl.update);
app.delete('/dogs/:id', dogCtrl.delete);


//listen

app.listen(8080, function(){
    console.log("Listening: The truth is out there!");
});
