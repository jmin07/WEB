// CONFIG
const logger = require("./package/logg");
const config = require("../../config/node_env/key");
const whitelist = config.cors.whitelist;

// EXPRESS
const express = require("express");
const app = express();
const cors = require("cors");

// ENV
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

// SESSION
const session = require("express-session");

// DATABASE
const pool = require("./package/Database");
const MySQLStore = require("express-mysql-session")(session);
const sessionStore = new MySQLStore({}, pool);

// Redis
// const connectRedis = require("connect-redis");
// const RedisStore = connectRedis(session);
// const redis = require("redis");
// const redisConfig = require("../../config/package/redis/config");
// const client = redis.createClient(redisConfig);

// SEQUELIZE
const { sequelize } = require("./package/sequelize/models/index");

// PASSPORT
const passport = require("passport");
const passportConfig = require("./package/passport/index");

// ROUTER
const authRouter = require("../app/Auth/auth.route");
const mailRouter = require("../app/Mail/mail.route");
const communityRouter = require("../app/Community/community.router");
// const cwRouter = require("../app/Crawling/cw.route");
// const traceRouter = require("../app/Trace/trace.route");

// client.connect().catch((error) => logger.error("redis client error", error));

let corsOptions;
const corsOptionDeletegate = (req, callback) => {
    if (whitelist.indexOf(req.header("origin")) !== -1) {
        corsOptions = {
            origin: true,
            credentials: true,
        };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

sequelize
    .sync({ force: false })
    .then(() => {
        logger.info("데이터베이스 연결 성공");
    })
    .catch((err) => {
        logger.error("데이터 베이스 연결 실패", err);
    });

app.use(cors(corsOptionDeletegate));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        name: process.env.SESSION_NAME,
        resave: false,
        saveUninitialized: true,
        store: sessionStore,
        cookie: {
            httpOnly: true,
            secure: false,
        },
    })
);

// session 보다 뒤에 작성해야한다!
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

app.use("/auth", authRouter);
app.use("/mail", mailRouter);
app.use("/community", communityRouter);
// app.use("/db", cwRouter);
// app.use("/trace", traceRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");
});

app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});

module.exports = app;
