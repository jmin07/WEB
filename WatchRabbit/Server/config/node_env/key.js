const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

process.env.NODE_ENV === "production"
    ? (module.exports = require("./prod"))
    : (module.exports = require("./dev"));
