const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

const https = require("https");
const http = require("http");

const logger = require("./src/middleware/package/logg");
const config = require("./config/node_env/key");
const app = require("./src/middleware/express");

process.env.NODE_ENV === "production"
    ? https.createServer(config.options, app).listen(HTTPS_PORT, () => {
          try {
              logger.info(
                  `[${config.env}] API Server Start At Port ${config.port}`
              );
          } catch (error) {
              logger.error(error);
          }
      })
    : http.createServer(app).listen(config.port, () => {
          try {
              logger.info(
                  `[${config.env}] API Server Start At Port ${config.port}`
              );
          } catch (error) {
              logger.error(error);
          }
      });
