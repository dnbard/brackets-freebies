define(function(require, exports, module){
    var ko = require('../vendor/knockout'),
        _ = require('../vendor/lodash');

    function FavoritesViewModel(){
        var self = this;

        this.list = ko.observableArray([]);
        this.list.subscribe(function(a){
            console.log(a);
        });

        this.add = function(model){
            var currentFavorites = self.list();

            function process(model){
                var findModel = _.find(currentFavorites, function(el){
                    return el.link === model.link;
                });

                if (!findModel){
                    self.list.push(model);
                } else {
                    self.list.remove(findModel);
                }
            }

            if (_.isArray(model)){
                _.each(model, function(el){
                    process(el);
                });
            } else {
                process(model);
            }
        }
    }

    module.exports = FavoritesViewModel;
});
