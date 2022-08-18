const mailProvider = require("./mailProvider");
const logger = require("../../middleware/package/logg/logger");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");
const bcrypt = require("bcrypt");

exports.searchUserEmail = async (email) => {
    try {
        const returnResult = await mailProvider.checkEmail([email]);
        if (returnResult.length >= 1) {
            logger.info(`${email} 이 존재합니다.`);
            return response(status.SEND_NUMBER_MAIL, returnResult[0]);
        } else {
            logger.error(`${email} 이 존재하지 않습니다.`);
            return errResponse(status.SEND_EMAIL_ERROR);
        }
    } catch (error) {
        logger.error("[searchUserEmail] ", error);
    }
};

exports.changeUserPassword = async (email, newPassword) => {
    try {
        const hashPassword = await bcrypt.hash(newPassword, 12);

        // 비밀번호 변경
        const userPassword = mailProvider.changePassword([hashPassword, email]);

        return userPassword;
    } catch (error) {
        logger.error("[changeUserPassword] ", error);
    }
};
