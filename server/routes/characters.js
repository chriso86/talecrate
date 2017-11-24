var Character = require('../models/character.model');

var characters = {
    getAll: function(request, response) {
        Character.find({})
            .exec()
            .then((characters) => {
                response.send(characters);
            })
            .catch((error) => {
                response.send('Error looking up characters');
            });
    },

    getOne: function(request, response) {
        Character.findOne({ _id: request.params.id })
            .exec()
            .then((character) => {
                response.send(character);
            })
            .catch((error) => {
                response.send("Error looking up character");
            });
    },

    create: function(request, response) {
        var newCharacter = new Character();

        newCharacter.name = request.body.name;
        newCharacter.description = request.body.description;

        newCharacter.save()
            .then((character) => {
                response.send(character);
            })
            .catch((error) => {
                response.send('Error creating character');
            });
    },

    update: function(request, response) {
        Character.findOneAndUpdate(
                { _id: request.params.id },
                { $set: {
                    name: request.body.name,
                    description: request.body.description
                }},
                { upsert: true }
            )
            .then((character) => {
                response.status(204);
                response.send(character);
            })
            .catch((error) => { 
                response.send('Error updating character');
            });
    },

    delete: function(request, response) {
        Character.findOneAndRemove(
                { _id: request.params.id }
            )
            .then((character) => {
                response.send('Character deleted successfully');
            })
            .catch((error) => {
                response.send('Error deleting character');
            });
    }
};

module.exports = characters;