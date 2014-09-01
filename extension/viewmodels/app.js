define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        DAL = require('../dal/index');

    function AppViewModel(){
        var self = this;

        this.topics = ko.observableArray([]);

        DAL.getTopics().success(function(data){
            self.topics(data);
        });
    }

    module.exports = AppViewModel;
});
