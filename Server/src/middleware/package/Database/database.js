const mysql2 = require("mysql2/promise");

const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

// TODO: 본인 DB 계정 입력
const options = {
    host: process.env.AWS_DB_HOST,
    user: process.env.AWS_DB_USER,
    port: process.env.AWS_DB_PORT,
    password: process.env.AWS_DB_PASSWORD,
    database: process.env.AWS_DATABASE,
};

const pool = mysql2.createPool(options);

module.exports = pool;
