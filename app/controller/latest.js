var models = require('../models/models.js');

module.exports = function(req, res) {
    models.find({}, function(err, docs){
        if (err) throw err;
        res.send(docs);
    });
};