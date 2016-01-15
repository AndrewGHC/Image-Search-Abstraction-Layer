var googleImages = require('../lib/google-images/index.js');
var models = require('../models/models.js');

module.exports = function(req, res) {
    var param   = decodeURIComponent(req.params[0]);
    var client  = googleImages('007681842535531188744:oice315q8ru', 'AIzaSyDlLhQ14DHhs3qdLg9TywTHgaYQM5ntPn4');
    
    if (req.query) {
        var options = {page:req.query.offset};
    }
    console.log(options);
    console.log(req.query);
    // To solve this, set the snippet to the input text. Use the rest of the vars in a new obj. Return this.
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