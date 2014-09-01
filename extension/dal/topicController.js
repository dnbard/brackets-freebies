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

        this.getDocumentsByTopic = function(id){
            if (typeof id !== 'string' || id.length === 0){
                throw new Error('Invalid argument');
            }

            return base.call({
                url: host + 'topic/' + id + '/documents'
            });
        }
    }

    TopicController.prototype = BaseController;

    module.exports = new TopicController();
});
