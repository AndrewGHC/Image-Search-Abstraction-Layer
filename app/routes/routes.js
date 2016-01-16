var api = require('../controller/api.js');
var latest = require('../controller/latest.js');
var path = process.cwd();

module.exports = function(app, env) {
    
    app.get('/', function(req, res) {
        res.sendFile(path + '/app/views/index.html');
    });
    
    app.get('/api/imagesearch/*', function(req, res) {
        api(req, res, env);
    });
    
    app.get('/latest/imagesearch/', function(req, res) {
        latest(req, res);
    });
};