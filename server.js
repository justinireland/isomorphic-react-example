// server.js

var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    lessMiddleware = require('less-middleware');

var port = 4444;
var server = express();

// Make sure to include the JSX transpiler
require('node-jsx').install();

// Include static assets. Not advised for production
server.use(express.static(path.join(__dirname, 'public')));
server.use(lessMiddleware(__dirname + '/public'));
// Set view path
server.set('views', path.join(__dirname, 'views'));
// set up ejs for templating. You can use whatever
server.set('view engine', 'ejs');

// Set up Routes
require('./app/routes/core-routes.js')(server);

//Route not found -- Set 404
server.get('*', function(req, res) {
    res.json({
        "route": "Sorry this page does not exist!"
    });
});

server.listen(port);
console.log('Server is Up and Running at Port : ' + port);