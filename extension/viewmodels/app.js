define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        _ = require('../vendor/lodash'),
        DAL = require('../dal/index'),
        defaultPage = 'default';

    function AppViewModel(){
        var self = this;

        this.topics = ko.observableArray([]);
        this.page = ko.observable(defaultPage);

        this.topic = ko.observable(null);
        this.documents = ko.observableArray([]);

        this.selectTopic = function(topic){
            self.topic(topic);

            DAL.getDocumentsByTopic(topic._id).success(function(documents){
                self.documents(documents);
            });
        }

        this.getField = function(obj, prop){
            if (typeof obj != 'object' || typeof prop !== 'string'){
                console.error('Invalid argument');
            }

            return obj[prop] || '';
        }

        DAL.getTopics().success(function(data){
            self.topics(_.sortBy(data, function(el){
                return el.name;
            }));
        });
    }

    module.exports = AppViewModel;
});
