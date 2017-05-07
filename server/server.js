// Set up modules
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var fs = require('fs');

// Define the app
var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/storyworld');

// Cross-Origin Resource Sharing
app.all('/*', function(request, result, next){
    // CORS headers
    result.header('Access-Control-Allow-Origin', '*'); // TODO: Restrict to domain
    result.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');

    // Custom CORS headers
    result.header('Access-Control-Allow-Headers', 'Content-type, Accept, X-Access-Token, X-Key');

    if (request.method === 'OPTIONS') {
        result.status(200).end();
    } else {
        next();
    }
});

// Token Authentication
app.all('/api/v1/*', [require('./middleware/validateRequest')]);

app.use('/', require('./routes'));

// 404 Not Found handling
app.use(function(request, result, next) {
    var error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Start the Server
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});