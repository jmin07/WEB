const commonDao = require("../CommonDao/common.dao");
const logger = require("../../middleware/package/logg");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");
const bcrypt = require("bcrypt");

exports.searchUserEmail = async (email) => {
    try {
        const returnResult = await commonDao.emailCheck({ email });
        const Result =
            returnResult.length >= 1
                ? response(status.SEND_NUMBER_MAIL, returnResult[0]) &&
                  logger.info(`${email} 이 존재합니다.`)
                : errResponse(status.SEND_EMAIL_ERROR) &&
                  logger.error(`${email} 이 존재하지 않습니다.`);
        return Result;
    } catch (error) {
        logger.error("[searchUserEmail] ", error);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};

// exports.changeUserPassword = async (email, newPassword) => {
//     try {
//         const hashPassword = await bcrypt.hash(newPassword, 12);

//         // 비밀번호 변경
//         const userPassword = mailProvider.changePassword([hashPassword, email]);

//         return userPassword;
//     } catch (error) {
//         logger.error("[changeUserPassword] ", error);
//         return errResponse(status.SERVICE_ERROR_MESSAGE);
//     }
// };
