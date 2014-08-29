var express = require('express'),
    config = require('./config'),
    Router = require('./router'),
    app = express();

app.use(new Router().get());

app.listen(config.port);
