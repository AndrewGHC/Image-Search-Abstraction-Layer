var googleImages = require('../lib/google-images/google-images.js');
var models = require('../models/model.js');

module.exports = function(req, res, env) {
    var param   = decodeURIComponent(req.params[0]);
    var client  = googleImages(env.CSE, env.API);
    
    if (req.query) {
        var options = {page:req.query.offset};
    }

    client.search(param, options)
        .then(function (images) {
            var sendImages = [];
            var parseImages = images.forEach(function(item){
                var retThis = {
                    url: item.url,
                    snippet: item.snippet,
                    thumbnail: item.thumbnail.url,
                    context: item.context
                };
                sendImages.push(retThis);
            });
            sendToDb(param);
            res.send(sendImages);
    });     

};

function sendToDb (query) {
    var date = new Date();
    
    var saveModel = new models({
        term:query,
        when:date.toDateString()
    });
    
    saveModel.save(function (err) {
        if (err) throw err;
    });
}