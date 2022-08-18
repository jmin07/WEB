const { mail, awsMail } = require("../../middleware/package/mail/nodemailer");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");
const logger = require("../../middleware/package/logg/logger");
const mailService = require("./mailService");

/**
 * API No.9
 * API Name: 인증 번호 요청
 * [GET] /mail/authentication
 */
exports.getAuthentication = async (req, res) => {
    const { email } = req.body;

    // Math.floor(Math.random() * (최대값 - 최소값) + 최소값);
    const randomNumber = Math.floor(Math.random() * (9999 - 1000) + 1000);

    let result;
    if (process.env.NODE_ENV === "development") {
        try {
            result = await awsMail("authenticationMail", email, randomNumber);
            logger.info(`인증번호를 ${email} 로 발송했습니다.`);
            // req.session.randomNumber=randomNumber;
            // req.session.save((err)=>{
            //     if(err){
            //         console.log(err);
            //     }
            // })
            res.status(200).send(
                response(status.SEND_NUMBER_MAIL, randomNumber)
            );
        } catch (error) {
            console.log("error: ", error);
            logger.error("[getAuthentication]", error);
            res.status(400).send(errResponse(status.SEND_NUMBER_MAIL));
        }
    } else if (process.env.NODE_ENV === "production") {
        try {
            result = await mail("authenticationMail", email, randomNumber);
            logger.info("인증번호를 이메일로 전송했습니다.");
            res.status(200).send(
                response(status.SEND_NUMBER_MAIL, randomNumber)
            );
        } catch (error) {
            logger.error("[getAuthentication]", error);
            res.status(400).send(errResponse(status.SEND_NUMBER_MAIL_ERROR));
        }
    }
};

/**
 * API No.10
 * API Name: 비밀번호 조회 요청
 * [POST] /mail/pwd
 */
exports.getChangePassword = async (req, res) => {
    const { email, password } = req.body;

    console.log("controller email:", email);
    console.log("password: ", password);
    console.log("여기가 실행되어야하는거 아닌가?");

    // 이메일 검증
    // return email, password
    const returnEmail = await mailService.searchUserEmail(email);

    console.log("userEmail:", returnEmail); // 객체로 넘어오는 것 같음
    console.log("userEmail result:", returnEmail.result); // 객체로 넘어오는 것 같음

    // 메일이 없으면 거절
    if (returnEmail.result < 1) {
        res.status(400).send(errResponse(status.SEND_EMAIL_ERROR));
    }

    // 비밀 번호 변경
    try {
        const result = mailService.changeUserPassword(email, password);
        res.status(200).send(
            response(status.CHANGE_USER_PASSWORD_SUCCESS, null)
        );
    } catch (error) {
        logger.error("[controller] :", error);
        res.status(400).send(errResponse(status.CHANGE_USER_PASSWORD_ERROR));
    }
};
