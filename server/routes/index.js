// Set up router modules
var express = require('express');
var router = express.Router();

// Set up other modules
var auth = require('./auth.js');
var characters = require('./characters.js');
var worlds = require('./worlds.js');
var contributors = require('./contributors.js');

/* Anonymous access */
router.post('/login', auth.login);

/* Authenticated access */
// Characters
router.get('/api/v1/characters', characters.getAll);
router.get('/api/v1/character/:id', characters.getOne);
router.post('/api/v1/character/', characters.create);
router.put('/api/v1/character/:id', characters.update);
router.delete('/api/v1/character/:id', characters.delete);

/* Authenticated & Authorized access */
// Worlds
router.get('/api/v1/worlds', worlds.getAll);
router.get('/api/v1/world/:id', worlds.getOne);
router.post('/api/v1/world/', worlds.create);
router.put('/api/v1/world/:id', worlds.update);
router.delete('/api/v1/world/:id', worlds.delete);

// Contributors
router.get('/api/v1/contributors', contributors.getAll);
router.get('/api/v1/contributor/:id', contributors.getOne);
router.post('/api/v1/contributor/', contributors.create);
router.put('/api/v1/contributor/:id', contributors.update);
router.delete('/api/v1/contributor/:id', contributors.delete);

// Export routing
module.exports = router;