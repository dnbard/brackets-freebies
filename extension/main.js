define(function (require, exports, module) {
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        iconService = require('./modules/icon'),
        modalService = require('./modules/modal');

    ExtensionUtils.loadStyleSheet(module, 'styles/main.css');

    //list of icons - http://ionicons.com/
    ExtensionUtils.loadStyleSheet(module, 'http://code.ionicframework.com/ionicons/1.5.2/css/ionicons.min.css');

    iconService.init();
    iconService.click(modalService.showHandler);
});
