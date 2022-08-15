// EXPRESS
const express = require("express");
const app = express();
const cors = require("cors");

// const history = require("connect-history-api-fallback");

// ENV
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname + "/../../.env") });

// SESSION
const session = require("express-session");

// DATABASE
const pool = require("./Database/database");
const MySQLStore = require("express-mysql-session")(session);
const sessionStore = new MySQLStore({}, pool);

// PASSPORT
const passport = require("passport");
const passportConfig = require("./passport/index"); // 폴더내의 index 파일을 기본적으로(default)로 불러온다.

// npm run build
// app.use("/", express.static("build"));

// ROUTER
const authRouter = require("../Routes/Auth/authRoute");
const mailRouter = require("../Routes/Mail/mailRoute");
const cwRouter = require("../Routes/Crawling/cwRoute");
const traceRouter = require("../Routes/Trace/traceRoute");

// console.log(path.join(__dirname, '../build'));

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
            //		methods: "GET, POST, PATCH, DELETE, PUT",
        };
    } else {
        corsOptions = { origin: false };
    }
    callback(null, corsOptions);
};

app.use(cors(corsOptionDeletegate));

//app.use(
//    cors({
//        origin: ["https://www.watchrabbit.co.kr", "http://localhost:3000"], // origin: true,
//	origin: '*',
//        credentials: true, // true 이면, origin: * 안됨 그리고 origin 배열도 안됨
//	withCredentials: true,
//        optionsSuccessStatus: 200,
//    })
//);

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
            // 추가 보완필요.
            httpOnly: true,
            secure: false,
        },
    })
);

// session 보다 뒤에 작성해야한다!
app.use(passport.initialize());
app.use(passport.session());
passportConfig();

// app.use((req, res, next)=>{
//     logger.info(`${req.ip} ${req.method} ${req.url}`)
//     logger.error(`${req.ip} ${req.method} ${req.url}`)
//     next();
// })

app.use("/auth", authRouter);
app.use("/mail", mailRouter);
app.use("/db", cwRouter);
app.use("/trace", traceRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");
    // res.sendFile(path.join(__dirname + "./../build/index.html"));
});

app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});

module.exports = app;
