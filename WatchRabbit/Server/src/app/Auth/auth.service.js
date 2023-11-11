// const authProvider = require("./authProvider");
const authDao = require("./auth.dao");
const commonDao = require("../commonDao/common.dao");
const bcrypt = require("bcrypt");
const logger = require("../../middleware/package/logg");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

/**
 * Service layer
 * req와 res 객체를 전달 하면 안된다.
 */
exports.createUser = async (email, password) => {
    try {
        const hashPassword = await bcrypt.hash(password, 12);

        const checkUser = await commonDao.emailCheck({ email });

        if (checkUser.length >= 1) {
            logger.error(`${email} 이메일 중복입니다.`);
            return errResponse(status.SIGNUP_EMAIL_ERROR);
        }

        // 로컬 회원 가입
        const userInsertResult = await authDao.createUser({
            email,
            password: hashPassword,
        });

        logger.info(`${email} 님이 회원가입에 성공했습니다.`);
        return response(status.REQUEST_SUCCESS, {
            email,
            userIdx,
        });

        // // 추적 테이블 생성
        // if (userInsertResult.dataValues.idx) {
        //     const userIdx = userInsertResult.dataValues.idx;

        //     // let newTraceItem = new Array();
        //     for (let traceIdx = 1; traceIdx < 6; traceIdx++) {
        //         await commonDao.createTraceItem({
        //             userIdx,
        //             traceIdx,
        //         });
        //     }
        // } else {
        //     logger.error(`${email} 님이 회원가입에 실패했습니다.`);
        //     return errResponse(status.SIGNUP_ERROR);
        // }
    } catch (error) {
        logger.error("[authService createUser]", error);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};
