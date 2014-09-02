define(function(require, exports, module){
    var config = require('../config'),
        icon = null;

    function init(){
        var imagePath = config.path + 'images/icon.png';

        icon = $('<a id="ext-freebies_logo" class="ion-images"></a>');

        icon.appendTo($("#main-toolbar .buttons"));
        setColor('#BBBBBB');
    }

    function click(handler){
        if (icon === null){
            throw new Error('Icon is not initialized');
        }

        icon.on('click', handler);
    }

    function setColor(color){
        if (typeof color !== 'string'){
            throw new Error('Invalid argument');
        } else if (!icon){
            throw new Error('Icon isn\'t initialized');
        }

        icon.css('color', color);
    }

    exports.init = init;
    exports.click = click;
});
