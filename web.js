var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
  // response.send('Hello World!');

    // this is the starting point 7/20/13 THJ

    var buf = fs.readFileSync("bitstarter.html");
    response.send(buf.toString());

});

// var port = process.env.PORT || 5000;
var port = process.env.PORT || 8080;

app.listen(port, function() {
  console.log("Listening on " + port);
});
