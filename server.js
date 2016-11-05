var express = require('express');
var app = express();

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(process.env.PORT || 5000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});