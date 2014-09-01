define(function(require, exports, module){
    var path = module.uri.replace('config.js', '');

    exports.path = path;
    exports.host = 'http://brackets-freebies.herokuapp.com/';
});
