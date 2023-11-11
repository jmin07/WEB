const config = require("../../node_env/key");
module.exports = {
    host: config.awsDB.host,
    user: config.awsDB.user,
    port: config.awsDB.port,
    password: config.awsDB.password,
    database: config.awsDB.dataBase,
};
