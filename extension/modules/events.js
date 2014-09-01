define(function(require, exports, module){
    var uuid = require('./uuid'),
        _ = require('../vendor/lodash');

    function EventsService(){
        this.events = {};
    }

    EventsService.prototype.on = function(eventName, handler){
        if (typeof eventName !== 'string' || typeof handler !== 'function'){
            throw new Error('Invalid argument');
        }

        if (!this.events[eventName]){
            this.events[eventName] = [];
        }

        var id = uuid();

        this.events[eventName].push({
            id: id,
            handler: handler
        });
    }

    EventsService.prototype.off = function(token){
        throw new Error('Not implemented');
    }

    EventsService.prototype.trigger = function(eventName, data){
        var handlers = this.events[eventName];
        data = data || null;

        if (this.events[eventName]){
            _.each(handlers, function(handler){
                setTimeout(function(){
                    handler(eventName, data);
                }, 0);
            });
        }
    }

    module.exports = new EventsService();
});
