// const { aws } = require("../../../../config/package/multer/config");
const configs = require("../../../../config/node_env/key");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

AWS.config.update({
    accessKeyId: configs.s3.accessKey,
    secretAccessKey: configs.s3.secretKey,
    region: configs.s3.region,
});

exports.upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: "wathcrabbit",
        acl: "public-read",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: (req, file, cb) => {
            cb(
                null,
                `watchrabbit/${Date.now()}_${path.basename(file.originalname)}`
            );
        },
    }),
    limit: { fileSize: 20 * 1024 * 1024 },
});
