var contributors = {
    getAll: function(request, result) {
        var allContributors = data;

        result.json(allContributors);
    },

    getOne: function(request, result) {
        var id = request.params.id;
        var contributor = data[0];

        result.json(contributor);
    },

    create: function(request, result) {
        var newContributor = request.body;
        data.push(newContributor);

        result.json(newContributor);
    },

    update: function(request, result) {
        var updatedContributor = result.body;
        var id = request.params.id;
        data[id] = updatedContributor;

        result.json(updatedContributor);
    },

    delete: function(request, result) {
        var id = request.params.id;

        data.splice(id, 1);

        result.json(true);
    }
};

var data = [
    {
        'name': 'Chris',
        'id': 1
    },
    {
        'name': 'Jason',
        'id': 2
    },
    {
        'name': 'Jacques',
        'id': 3
    }
];

module.exports = contributors;