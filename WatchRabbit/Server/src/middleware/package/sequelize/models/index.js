"use strict";
const config = require("../../../../../config/node_env/key");

const Sequelize = require("sequelize");
const User = require("./user");
const Community = require("./community");
const Comment = require("./comment");
const Like = require("./like");
const Reply = require("./reply");
// const Trace = require("./trace");
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
db.Community = Community;
db.Comment = Comment;
db.Like = Like;
db.Reply = Reply;
// db.Trace = Trace;

User.init(sequelize);
Community.init(sequelize);
Comment.init(sequelize);
Like.init(sequelize);
Reply.init(sequelize);
// Trace.init(sequelize);

User.associate(db);
Community.associate(db);
Comment.associate(db);
Like.associate(db);
Reply.associate(db);
// Trace.associate(db);

module.exports = db;
