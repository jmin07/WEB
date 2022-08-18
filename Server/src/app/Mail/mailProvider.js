const pool = require("../../middleware/package/Database/database");
const commonDao = require("../commonDao/commonDao");
const mailDao = require("./mailDao");
const logger = require("../../middleware/package/logg/logger");

exports.checkEmail = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await commonDao.checkEmail(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error(error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error(error);
    }
};

exports.changePassword = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await mailDao.changePassword(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[mysql pool]: ", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error(error);
    }
};
