define(function(require, exports, module){
    var _ = require('../vendor/lodash'),
        controllers = {
            topic: require('./topicController')
        };

    function DALService(){
        var self = this;

        _.each(controllers, function(controller){
            _.each(controller, function(handler, name){
                if (name === 'call'){
                    return true;
                }

                if (self[name]){
                    throw new Error('Handler %s already implemented', name);
                }

                self[name] = handler;
            });
        });
    }

    module.exports = new DALService();
});
