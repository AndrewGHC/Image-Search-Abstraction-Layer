var models = require('../models/model.js');

module.exports = function(req, res) {
    models.find({},{_id:0, __v:0}, function(err, docs){
        if (err) throw err;
        res.send(docs);
    });
};