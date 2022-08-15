const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/../../.env") });

require("winston-daily-rotate-file");
const { createLogger, transports, format } = require("winston");
const { Console, DailyRotateFile } = transports;
const {
    combine,
    timestamp,
    printf,
    label,
    json,
    simple,
    colorize,
    prettyPrint,
} = format;

const PATH = "./config/logs";

// console 에 출력되는 format 형태
const printFormat = printf(({ timestamp, label, level, message }) => {
    return `${timestamp} [${label}] ${level.toUpperCase()} : ${message}`;
});

const printLogFormat = {
    file: combine(
        label({
            label: "WatchRabbit",
        }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        prettyPrint(),
        printFormat
    ),
    console: combine(
        colorize(),
        simple()
        // printFormat
    ),
};

const options = {
    // info level 이상 error warn info 가 모두 들어간다.
    info: new DailyRotateFile({
        filename: "application-%DATE%.log",
        dirname: PATH + "/info",
        level: "info",
        maxFiles: "20d",
        zippedArchive: true,
        format: printLogFormat.file,
    }),
    // error 만 따로 저장하기 위해서 생성
    error: new DailyRotateFile({
        filename: "error-%DATE%.log",
        dirname: PATH + "/error",
        level: "error",
        maxFiles: "20d",
        zippedArchive: true,
        format: printLogFormat.file,
    }),
    console: new Console({
        level: "info",
        format: printLogFormat.console,
    }),
};

const logger = createLogger({
    transports: [options.info, options.error],
});

// 개발용 서버가 아니면 Console로 출력
if (process.env.NODE_ENV !== "production") {
    logger.add(options.console);
}

module.exports = logger;
