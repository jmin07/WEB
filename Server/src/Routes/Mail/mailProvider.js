const pool = require("../../middleware/Database/database");
const commonDao = require("../commonDao/commonDao");
const mailDao = require("./mailDao");
const logger = require("../../middleware/logg/logger");

module.exports.checkEmail = async (userInfo) => {
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

module.exports.changePassword = async (userInfo) => {
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

// module.exports. = async (userInfo) => {
//     const connection = await pool.getConnection(async (conn) => conn);
//     const Result = await commonDao.checkPassword(connection, userInfo);
//     connection.release();

//     return Result;
// };
