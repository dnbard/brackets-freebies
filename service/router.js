var express = require('express'),
    config = require('./config'),
    morgan = require('morgan'),
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
}

ApplicationRouter.prototype.routing = function(){
    this.router.get('/topics', topics.getTopics);
}

ApplicationRouter.prototype.get = function(){
    return this.router;
}

module.exports = ApplicationRouter;
