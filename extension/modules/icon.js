define(function(require, exports, module){
    var config = require('../config'),
        icon = null;

    function init(){
        var imagePath = config.path + 'images/icon.png';

        icon = $('<a id="ext-freebies_logo"></a>');

        //icon.css('background', 'url(' + config.path + 'images/icon.png)');
        icon.css('background', 'red');
        icon.appendTo($("#main-toolbar .buttons"));
    }

    function click(handler){
        if (icon === null){
            throw new Error('Icon is not initialized');
        }

        icon.on('click', handler);
    }

    exports.init = init;
    exports.click = click;
});
