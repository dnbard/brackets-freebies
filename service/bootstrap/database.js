var path = require('path'),
    fs = require('fs');

var modelsPath = path.join(__dirname, '../models');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});
