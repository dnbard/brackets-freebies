define(function(require, exports, module){
    function BaseController(){ }

    BaseController.prototype.call = function(params){
        return $.ajax(params).error(function(err){
            console.error(err);
        });
    }

    module.exports = new BaseController();
});
