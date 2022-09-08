const AWS = require("../../../../config/package/multer/config");
const path = require("path");
const multer = require("multer");
const multerS3 = require("multer-s3");

const upload = multer({
    storage: multerS3({
        s3: new AWS.S3(),
        bucket: "watchrabbit",
        key(req, file, cb) {
            cb(
                null,
                `watchrabbit/${Date.now()}_${path.basename(file.originalname)}`
            );
        },
    }),
    limit: { fileSize: 20 * 1024 * 1024 },
});

module.exports = upload;
