// config
const config = require("../../../../config/node_env/key");
const logger = require("../logg");
const ourEmail = config.awsEmail.id;
const accessKeyId = config.awsEmail.accessKey;
const secretAccessKey = config.awsEmail.secretKey;

// module
const nodemailer = require("nodemailer");
const AWS = require("aws-sdk");

// ----------------------- gmail ---------------------
const authMail = (option, email, randomNumber) => {
    if (option === "authenticationMail") {
        const authenticationMail = {
            from: ourEmail,
            to: mail,
            subject: "WatchRabbit Agent Sing up",
            text: "테스트 이메일 진행 중입니다.",
            html: htmlTemplate({ email, randomNumber }),
        };

        return authenticationMail;
    } else if (option == "alarmMail") {
        const alarmMail = {
            from: ourEmail,
            to: mail,
            subject: "WatchRabbit Agent alarm",
            text: "테스트 이메일 진행 중입니다.",
            html: `
            <h1>WatchRabbit Agent</h1>
            요청하신 알람 관련 메일입니다.
            `,
        };
        return alarmMail;
    }
};

const mail = async (option, email, number) => {
    const message = authMail(option, email, number);

    // Generate test SMTP service account from ethereal.email
    if (process.env.NODE_ENV === "production") {
        transporter = await nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.email",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: ourEmail,
                pass: process.env.TEST_EMAIL_PASSWORD,
            },
        });
    } else {
        transporter = await nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.email",
            port: 465,
            secure: true,
            auth: {
                user: ourEmail,
                pass: process.env.TEST_EMAIL_PASSWORD,
            },
        });
    }

    transporter.sendMail(message).catch((error) => {
        logger.error(error);
    });
};

// --------------------------  AWS Email ----------------
const awsMail = (option, email, randomNumber = null, ...args) => {
    const SES_CONFIG = {
        accessKeyId,
        secretAccessKey,
        region: "ap-northeast-2",
    };

    const AWS_SES = new AWS.SES(SES_CONFIG);

    let HTML, TITLE, htmlTemplate;
    if (option === "authenticationMail") {
        htmlTemplate = require("../../../../config/package/email/loginCode.js");
        HTML = htmlTemplate({ email, randomNumber });
        TITLE = "WatchRabbit 인증 번호 메일입니다.";
    } else if (option === "findPassword") {
        htmlTemplate = require("../../../../config/package/email/findPassward.js");
        HTML = htmlTemplate({ email, password });
        TITLE = "WatchRabbit 비밀번호 메일입니다.";
    }

    const params = {
        Source: process.env.AWS_EMAIL_ID,
        Destination: {
            ToAddresses: [email],
        },
        ReplyToAddresses: ["AgentRabbit@watchrabbit.co.kr"],
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: TITLE,
            },
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: HTML,
                },
            },
        },
    };

    return AWS_SES.sendEmail(params).promise();
};

module.exports = { mail, awsMail };
