var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var morgan = require('morgan')

// var items = require('../database-mongo');

var app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));



app.get('/items', function (req, res) {
  res.send('works')
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

