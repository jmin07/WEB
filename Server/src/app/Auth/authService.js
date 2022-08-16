const authProvider = require("./authProvider");
const bcrypt = require("bcrypt");
const logger = require("../../middleware/package/logg/logger");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

/**
 * Service layer
 * req와 res 객체를 전달 하면 안된다.
 */
module.exports.createUser = async (email, password) => {
    try {
        // 비밀번호 암호화
        const hashPassword = await bcrypt.hash(password, 12);

        // 유저 중복
        const checkUser = await authProvider.localUser([email]);

        if (checkUser.length >= 1) {
            logger.info(`${email} 이메일 중복입니다.`);
            return errResponse(status.SIGNUP_EMAIL_ERROR);
        }

        // 유저 생성
        const userInsertResult = await authProvider.createUser([
            email,
            hashPassword,
        ]);

        if (userInsertResult.insertId) {
            const userIdx = userInsertResult.insertId;

            let newTraceItem = new Array();
            for (let i = 1; i < 6; i++) {
                newTraceItem.push([userIdx, i]);
            }

            // // 유저 생성 후, trace Table 생성
            // // 배열 push 사용 필요
            const traceItem = await authProvider.createTraceItem([
                newTraceItem,
            ]);

            // 회원가입 성공
            logger.info(`${email} 님이 회원가입에 성공했습니다.`);
            return response(status.REQUEST_SUCCESS, {
                email,
                userIdx,
            });
        } else {
            logger.info(`${email} 님이 회원가입에 실패했습니다.`);
            return errResponse(status.SIGNUP_ERROR);
        }
    } catch (error) {
        logger.error(error);
    }
};
