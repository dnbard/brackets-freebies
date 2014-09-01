define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        DAL = require('../dal/index'),
        defaultPage = 'default';

    function AppViewModel(){
        var self = this;

        this.topics = ko.observableArray([]);
        this.page = ko.observable(defaultPage);

        this.topic = ko.observable(null);

        this.selectTopic = function(topic){
            self.topic(topic);
        }

        DAL.getTopics().success(function(data){
            self.topics(data);
        });
    }

    module.exports = AppViewModel;
});
