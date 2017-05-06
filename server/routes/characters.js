var characters = {
    getAll: function(request, result) {
        var allCharacters = data;

        result.json(allCharacters);
    },

    getOne: function(request, result) {
        var id = request.params.id;
        var character = data[0];

        result.json(character);
    },

    create: function(request, result) {
        var newCharacter = request.body;
        data.push(newCharacter);

        result.json(newCharacter);
    },

    update: function(request, result) {
        var updatedCharacter = result.body;
        var id = request.params.id;
        data[id] = updatedCharacter;

        result.json(updatedCharacter);
    },

    delete: function(request, result) {
        var id = request.params.id;

        data.splice(id, 1);

        result.json(true);
    }
};

var data = [
    {
        'name': 'William Oakley',
        'id': 1
    },
    {
        'name': 'Charles Andia',
        'id': 2
    },
    {
        'name': 'Jack Adams',
        'id': 3
    }
];

module.exports = characters;