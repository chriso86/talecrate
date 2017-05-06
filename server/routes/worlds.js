var mongoose = require('mongoose');

var worlds = {
    getAll: function(request, result) {
        var result = mongoose.model('worlds')
            .find((err, worlds) => {
                result.send(worlds);
            });

        return result;
    },

    getOne: function(request, result) {
        var result = mongoose.model('worlds')
            .find({ _id: request.params.id }, (err, worlds) => {
                result.send(worlds);
            });
        
        return result;
    },

    create: function(request, result) {
        var newWorld = new worldSchema({
            name: 'Test world',
            description: 'A test world, I hope I see this'
        });

        newWorld.save((error, world) => {
            if(error) result.send(error);

            result.send(world);
        })
    },

    update: function(request, result) {
        var updatedWorld = result.body;
        var id = request.params.id;
        data[id] = updatedWorld;

        result.json(updatedWorld);
    },

    delete: function(request, result) {
        var id = request.params.id;

        data.splice(id, 1);

        result.json(true);
    }
};

var data = [
    {
        'name': 'Helium',
        'id': 1
    },
    {
        'name': 'Northrandia',
        'id': 2
    },
    {
        'name': 'Estria',
        'id': 3
    }
];

module.exports = worlds;