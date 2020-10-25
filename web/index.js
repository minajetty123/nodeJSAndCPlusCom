var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  var ffi = require('ffi');
  var ref = require('ref');
  var int = ref.types.int;

  var currentPath = process.cwd();
  console.log("current runtime path:" + currentPath);
//C++ and Js communication part
  var element1 = 10;
  var element2 = 20;
  var libprime = ffi.Library("../cpp/lib4ffinew/build/Release/prime.dll", {
    'GetAdd': [ int, [ int, int] ]
  })
  var sum = libprime.GetAdd(element1, element2);
//end
  
  res.json({ result: sum })
});

var server = app.listen(3000, function () {
  console.log('Web server listing at http://localhost:%s', server.address().port);
});
