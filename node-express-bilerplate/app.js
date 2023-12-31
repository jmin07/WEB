const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

const https = require("https");
const http = require("http");

const logger = require("./src/middleware/package/logg/logger");

const fs = require("fs");
const app = require("./src/middleware/express");

const HTTPS_PORT = process.env.HTTPS_PORT;

console.log(process.env.NODE_ENV);

const options = {
    key: fs
        .readFileSync
        // 작성하세용
        (),
    cert: fs
        .readFileSync
        // 작성하세용
        (),
};

// Create an HTTPS server.
// https.createServer(options, app).listen(HTTPS_PORT, () => {
//     try {
//         logger.info(
//             `[${process.env.NODE_ENV}] API Server Start At Port ${HTTPS_PORT}`
//         );
//     } catch (error) {
//         logger.error(error);
//     }
// });

http.createServer(app).listen(HTTPS_PORT, () => {
    try {
        logger.info(
            `[${process.env.NODE_ENV}] API Server Start At Port ${HTTPS_PORT}`
        );
    } catch (error) {
        logger.error(error);
    }
});
