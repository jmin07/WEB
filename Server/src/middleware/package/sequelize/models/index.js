"use strict";
const config = require("../../../../../config/node_env/key");

const Sequelize = require("sequelize");
const User = require("./user");
const db = {};

const sequelize = new Sequelize(
    config.awsDB.dataBase,
    config.awsDB.user,
    config.awsDB.password,
    {
        host: config.awsDB.host,
        dialect: "mysql",
    }
);

db.sequelize = sequelize;
db.User = User;

User.init(sequelize);
// User.associate(db);

module.exports = db;
