require('./bootstrap/database');

var express = require('express'),
    config = require('./config'),
    Router = require('./router'),
    mongoose = require('mongoose'),
    app = express(),
    logger = require('./modules/logger'),
    db = mongoose.connection;

mongoose.connect(config.connectionString)

db.on('error', logger.error.bind(console, 'connection error:'));
db.once('open', function() {
    logger.log('Connected to MongoDB');

    app.use(new Router().get());
    app.listen(config.port, function(){
        logger.log('Express: Started at port %s', config.port);
    });
});
