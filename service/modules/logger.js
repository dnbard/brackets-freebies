var config = require('../config'),
    isDevEnv = config.env === 'development';

function Logger(){

}

Logger.prototype.info = function(){
    if (isDevEnv){
        console.log.apply(this, arguments);
    }
}

Logger.prototype.log = function(){
    console.log.apply(this, arguments);
}

Logger.prototype.error = function(){
    console.error.apply(this, arguments);
}

var instance = new Logger();

module.exports = instance;
