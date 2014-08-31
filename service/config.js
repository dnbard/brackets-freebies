module.exports = {
    port: process.env.PORT || 3000 ,
    env: process.env.NODE_ENV || 'development',
    connectionString: process.env.MONGO || 'mongodb://rhianon:rhianon@paulo.mongohq.com:10087/buh-db',
    authKey: process.env.NODE_AUTH || '123321'
}
