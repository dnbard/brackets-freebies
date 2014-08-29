var express = require('express'),
    topics = require('./controllers/topics');

function ApplicationRouter(){
    this.init(express);
}

ApplicationRouter.prototype.init = function(express){
    this.router = express.Router();

    this.router.get('/topics', topics.getTopics);
}

ApplicationRouter.prototype.get = function(){
    return this.router;
}

module.exports = ApplicationRouter;
