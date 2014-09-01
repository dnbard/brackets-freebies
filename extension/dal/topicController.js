define(function(require, exports, module){
    var host = require('../config').host,
        BaseController = require('./base');

    function TopicController(){
        var base = this;

        this.getTopics = function(){
            return base.call({
                url: host + 'topics'
            });
        }
    }

    TopicController.prototype = BaseController;

    module.exports = new TopicController();
});
