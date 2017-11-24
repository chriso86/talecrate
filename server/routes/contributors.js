var Contributor = require('../models/contributor.model');

var contributors = {
    getAll: function(request, response) {
        Contributor.find({})
            .exec()
            .then((contributors) => {
                response.send(contributors);
            })
            .catch((error) => {
                response.send('Error looking up contributors');
            });
    },

    getOne: function(request, response) {
        Contributor.findOne({ _id: request.params.id })
            .exec()
            .then((contributor) => {
                response.send(contributor);
            })
            .catch((error) => {
                response.send("Error looking up contributor");
            });
    },

    create: function(request, response) {
        var newContributor = new Contributor();

        newContributor.name = request.body.name;
        newContributor.description = request.body.description;

        newContributor.save()
            .then((contributor) => {
                response.send(contributor);
            })
            .catch((error) => {
                response.send('Error creating contributor');
            });
    },

    update: function(request, response) {
        Contributor.findOneAndUpdate(
                { _id: request.params.id },
                { $set: {
                    name: request.body.name,
                    description: request.body.description
                }},
                { upsert: true }
            )
            .then((contributor) => {
                response.status(204);
                response.send(contributor);
            })
            .catch((error) => { 
                response.send('Error updating contributor');
            });
    },

    delete: function(request, response) {
        Contributor.findOneAndRemove(
                { _id: request.params.id }
            )
            .then((contributor) => {
                response.send('Contributor deleted successfully');
            })
            .catch((error) => {
                response.send('Error deleting contributor');
            });
    }
};

module.exports = contributors;