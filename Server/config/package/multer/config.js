const AWS = require("aws-sdk");
const configs = require("../../node_env/key");

AWS.config.update({
    accessKeyId: configs.s3.accessKey,
    secretAccessKey: configs.s3.secretKey,
    region: configs.s3.region,
});

module.exports = AWS;
