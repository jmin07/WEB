const config = require("../../node_env/key");
module.exports = {
    url: `redis://${config.redis.id}:${config.redis.password}@${config.redis.host}:${config.redis.port}`,
    logErrors: true,
    legacyMode: true,
};
