// Set up modules
var jwt = require('jwt-simple');
var validateUser = require('../routes/auth').validateUser;

module.exports = function(request, result, next) {
    // Skip token auth for [OPTIONS] requests
    // if (request.method === 'OPTIONS') next();

    var token = (request.body && request.body.access_token)
             || (request.query && request.query.access_token)
             || request.headers['x-access-token'];
    var key = (request.body && request.body.x_key)
           || (request.query && request.query.x_key)
           || request.headers['x-key'];

    if (token || key) {
        try {
            var decoded = jwt.decode(token, require('../config/secret.js')());

            if (decoded.exp <= Date.now()) {
                result.status(400);
                result.json({
                    'status': 400,
                    'message': 'Token Expired'
                });
                return;
            }

            // Authorize user for resource access
            var dbUser = validateUser(key);

            if (dbUser) {
                if((request.url.indexOf('admin') >= 0 && dbUser.role === 'admin')
                || (request.url.indexOf('admin') < 0 && request.url.indexOf('/api/v1/') >= 0)) {
                    next();
                } else {
                    result.status(403);
                    result.json({
                        'status': 403,
                        'message': 'Not Authorized'
                    });
                    return;
                }
            } else {
                result.status(401);
                result.json({
                    'status': 401,
                    'message': 'Invalid User'
                });
                return;
            }
        } catch (error) {
            result.status(500);
            result.json({
                'status': 500,
                'message': 'Oops, something has gone wrong'
            });
            return;
        }
    } else {
        result.status(401);
        result.json({
            'status': 401,
            'message': 'Invalid Key or Token'
        });
        return;
    }
};