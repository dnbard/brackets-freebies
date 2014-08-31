var express = require('express'),
    config = require('./config'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    topics = require('./controllers/topics');

function ApplicationRouter(){
    this.init(express);
}

ApplicationRouter.prototype.init = function(express){
    this.router = express.Router();
    this.middleware();
    this.routing();
}

ApplicationRouter.prototype.middleware = function(){
    this.router.use(morgan(config.env === 'development'? 'dev' : 'default'));

    this.router.use(bodyParser.urlencoded({ extended: false }));
    this.router.use(bodyParser.json());

    this.router.use(require('./modules/auth'));
}

ApplicationRouter.prototype.routing = function(){
    this.router.post('/topic', topics.postTopic);

    this.router.get('/topics', topics.getTopics);
}

ApplicationRouter.prototype.get = function(){
    return this.router;
}

module.exports = ApplicationRouter;
