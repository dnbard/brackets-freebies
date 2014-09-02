define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        _ = require('../vendor/lodash'),
        DAL = require('../dal/index'),
        defaultPage = 'default',
        iframePage = 'iframe';

    function AppViewModel(dialog){
        var self = this;

        this.dialog = dialog;

        this.topics = ko.observableArray([]);
        this.page = ko.observable(defaultPage);

        this.topic = ko.observable(null);
        this.documents = ko.observableArray([]);

        this.document = ko.observable(null);

        this.selectTopic = function(topic){
            self.page(defaultPage);
            self.topic(topic);

            DAL.getDocumentsByTopic(topic._id).success(function(documents){
                self.documents(documents);
            });
        }

        this.selectDocument = function(document){
            self.topic(null);
            self.document(document);
            self.page(iframePage);
            iframeResize();
        }

        this.getField = function(obj, prop){
            if (typeof obj != 'object' || typeof prop !== 'string'){
                console.error('Invalid argument');
            }

            return obj[prop] || '';
        }

        function iframeResize(){
            setTimeout(function(){
                $('.iframe-document').css('height', $('.fb-page').css('height'));
            }, 10);
        }

        DAL.getTopics().success(function(data){
            self.topics(_.sortBy(data, function(el){
                return el.name;
            }));
        });
    }

    AppViewModel.prototype.close = function(){
        this.dialog.remove();
        $('.modal-wrapper').remove();
    }

    AppViewModel.prototype.reload = function(){
        this.page(defaultPage);
        this.documents([]);
        this.topic(null);
        this.document(null);
    }

    module.exports = AppViewModel;
});
