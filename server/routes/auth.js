// Set up modules
var jwt = require('jwt-simple');

var auth = {
    login: function(request, result) {
        var username = request.body.username || '';
        var password = request.body.password || '';

        // Check if the username or password are invalid
        if(!username || !password) {
            result.status(401);
            result.json({
                'status': 401,
                'message': 'Invalid Credentials'
            });
            return;
        }

        // Check the user credentials against the DB
        var dbUser = auth.validate(username, password);

        if(!dbUser) {
            result.status(401);
            result.json({
                'status': 401,
                'message': 'Invalid Credentials'
            });
            return;
        }

        // Generate the access token
        result.json(generateToken(dbUser));
    },

    validate: function(username, password) {
        var dbUser = {
            name: 'storyworld',
            role: 'admin',
            username: 'storyworld@storyworld.com'
        };

        return dbUser;
    },

    validateUser: function(username) {
        var dbUser = {
            name: 'storyworld',
            role: 'admin',
            username: 'storyworld@storyworld.com'
        };

        return dbUser;
    }
};

// Private methods
function generateToken(dbUser) {
    var expires = expiresIn(7);
    var token = jwt.encode({
        exp: expires
    }, require('../config/secret')());

    return {
        token: token,
        expires: expires,
        user: dbUser
    };
};

function expiresIn(numberOfDays) {
    var date = new Date();

    return date.setDate(date.getDate() + numberOfDays);
};

module.exports = auth;