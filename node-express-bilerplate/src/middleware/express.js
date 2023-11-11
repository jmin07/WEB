require("dotenv").config;

// middleware
const express = require("express");
const morgan = require("morgan");

// Route Path
const userRoute = require("../src/app/User/userRoute");

// app 객체를 export 하는 방법은 각자 스타일에 맞게 작성할 수 있다.
// ------------------ 1번 방법 -------------------
module.exports = () => {
    const app = express();

    // 개발용
    app.use(morgan("dev"));

    // post json 데이터 읽기 위해
    app.use(express.json());
    app.use(express.urlencoded({ extended: true })); // true: qs, false: querystring

    // Route path
    userRoute(app);
    // boardRoute(app);

    // try experiment
    // app.use('/user', user);
    // app.use('/board', boardRoute);

    app.use((req, res, next) => {
        res.status(404).send("Sorry cant find that!");
    });

    app.use((err, req, res, next) => {
        res.status(500).send("Something broke!");
    });

    return app;
};

// ------------------- 2번 방법 -------------------
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.use((req, res, next) => {
    res.status(404).send("Sorry cant find that!");
});

app.use((err, req, res, next) => {
    res.status(500).send("Something broke!");
});

module.exports = app;
