var World = require('../models/world.model');

var worlds = {
    getAll: function(request, response) {
        World.find({})
            .exec()
            .then((worlds) => {
                response.send(worlds);
            })
            .catch((error) => {
                response.send('Error looking up worlds');
            });
    },

    getOne: function(request, response) {
        World.findOne({ _id: request.params.id })
            .exec()
            .then((world) => {
                response.send(world);
            })
            .catch((error) => {
                response.send("Error looking up world");
            });
    },

    create: function(request, response) {
        var newWorld = new World();

        newWorld.name = request.body.name;
        newWorld.description = request.body.description;

        newWorld.save()
            .then((world) => {
                response.send(world);
            })
            .catch((error) => {
                response.send('Error creating world');
            });
    },

    update: function(request, response) {
        World.findOneAndUpdate(
                { _id: request.params.id },
                { $set: {
                    name: request.body.name,
                    description: request.body.description
                }},
                { upsert: true }
            )
            .then((world) => {
                response.status(204);
                response.send(world);
            })
            .catch((error) => { 
                response.send('Error updating world');
            });
    },

    delete: function(request, response) {
        World.findOneAndRemove(
                { _id: request.params.id }
            )
            .then((world) => {
                response.send('World deleted successfully');
            })
            .catch((error) => {
                response.send('Error deleting world');
            });
    }
};

module.exports = worlds;