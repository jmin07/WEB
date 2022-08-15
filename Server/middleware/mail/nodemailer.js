const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/../../.env") });

const nodemailer = require("nodemailer");
const logger = require("../logg/logger");

// const AWS = require('@aws-sdk/client-ses');
// const { defaultProvider } = require('@aws-sdk/credential-provider-node');
const AWS = require("aws-sdk");

// const fs = require("fs");
// const ejs = require("ejs");
// ejs.renderfile;

/**
 * AWS는 nodemailer 를 사용하지 않고 메일 발송 되고 있음.
 * 코드 정리가 다시 필요함.
 */

let OUR_MAIL;
if (process.env.NODE_ENV === "development") {
    OUR_MAIL = process.env.AWS_EMAIL_ID;
} else {
    OUR_MAIL = process.env.TEST_EMAIL_ID;
}

// ----------------------- gmail ---------------------
const authMail = (option, email, randomNumber) => {
    if (option === "authenticationMail") {
        const authenticationMail = {
            from: OUR_MAIL,
            to: mail,
            subject: "WatchRabbit Agent Sing up",
            text: "테스트 이메일 진행 중입니다.",
            html: htmlTemplate({ email, randomNumber }),

            // `
            // <h1>WatchRabbit Agent</h1>
            // 인증번호는 ${number} 입니다.
            // 회원가입 해주셔서 감사합니다.
            // `,
        };

        return authenticationMail;
    } else if (option == "alarmMail") {
        const alarmMail = {
            from: OUR_MAIL,
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
                user: OUR_MAIL,
                pass: process.env.TEST_EMAIL_PASSWORD,
            },
        });
    } else {
        // process.env.NODE_ENV === 'development'
        transporter = await nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.email",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
                user: OUR_MAIL,
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
    console.log("randomNumber : ", randomNumber);
    // 인자 순서: email, randomNumber, password
    const SES_CONFIG = {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
        region: "ap-northeast-2",
    };

    const AWS_SES = new AWS.SES(SES_CONFIG);

    // let transporter = nodemailer.createTransport({
    //     SES: new AWS.SES({
    //         apiVersion: '2010-12-01'
    //     })
    // })

    let HTML, TITLE, htmlTemplate;
    if (option === "authenticationMail") {
        htmlTemplate = require("../../config/email_HTML/loginCode.js");
        HTML = htmlTemplate({ email, randomNumber });
        TITLE = "WatchRabbit 인증 번호 메일입니다.";
    } else if (option === "findPassword") {
        // 복호화 안됨 // 삭제 필요
        htmlTemplate = require("../../config/email_HTML/findPassward.js");
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
