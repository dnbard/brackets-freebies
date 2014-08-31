var config = require('../config');

module.exports = function(req, res, next){
    if (req.method.toLowerCase() === 'post' && req.body.authKey !== config.authKey){
        return res.status(401).send({
            error:'Not Authorised'
        });
    }
    next();
}
