require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var morgan = require('morgan')
var router = require('../router/router.js');
var db = require('../database-mongo');

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/',router);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log('Connected to Port: '+PORT);
});

