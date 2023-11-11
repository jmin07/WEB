const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

const mysql2 = require("mysql2/promise");
const config = require("../../../../config/package/mysql/config");

const pool = mysql2.createPool(config);

module.exports = pool;
