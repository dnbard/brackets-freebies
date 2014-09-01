define(function (require, exports, module) {
    var ExtensionUtils = brackets.getModule('utils/ExtensionUtils'),
        iconService = require('./modules/icon'),
        modalService = require('./modules/modal');

    ExtensionUtils.loadStyleSheet(module, 'styles/main.css');

    iconService.init();
    iconService.click(modalService.showHandler);
});
