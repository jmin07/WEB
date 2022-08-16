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
const pool = require("./package/Database/database");
const MySQLStore = require("express-mysql-session")(session);
const sessionStore = new MySQLStore({}, pool);

// PASSPORT
const passport = require("passport");
const passportConfig = require("./package/passport/index");

// ROUTER
const authRouter = require("../app/Auth/authRoute");
const mailRouter = require("../app/Mail/mailRoute");
const cwRouter = require("../app/Crawling/cwRoute");
const traceRouter = require("../app/Trace/traceRoute");

const whitelist = [
    "https://www.watchrabbit.co.kr",
    "https://www.watchrabbit.co.kr:8443",
];

const corsOptionDeletegate = (req, callback) => {
    let corsOptions;
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
app.use("/db", cwRouter);
app.use("/trace", traceRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");
});

app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});

module.exports = app;
