const http = require('http');
const express = require('express');

const app = express();

app.use('/static', express.static('public'));
app.get('/', function(req, res) {
    res.sendfile('index.html', {root: 'src/views'});
});

const server = http.Server(app);
const port = 3000;
server.listen(port, function(){
    console.log('Server running on port: ' + port);
});

app.use(function(req, res, next){
    const err = new Error('Not Found');
    err.status=404;
    next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        status: err.status,
        message: err.message,
    });
});
