const pool = require("../../middleware/package/Database/database");
const commonDao = require("../commonDao/commonDao");
const mailDao = require("./mailDao");
const logger = require("../../middleware/package/logg/logger");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

exports.checkEmail = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await commonDao.checkEmail(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[mailProvider commonDao checkEmail]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[mailProvider checkEmail]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.changePassword = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await mailDao.changePassword(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[mailProvider mailDao changePassword]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[mailProvider changePassword]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};
