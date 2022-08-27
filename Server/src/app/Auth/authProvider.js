const pool = require("../../middleware/package/Database/database");
const userDao = require("./authDao");
const logger = require("../../middleware/package/logg/logger");
const { errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

// exports.userList = async (userInfo) => {
//     try {
//         const connection = await pool.getConnection(async (conn) => conn);
//         try {
//             const Result = await userDao.selectUserList(connection, userInfo);
//             return Result;
//         } catch (error) {
//             logger.error("[authProvider userDao selectUserList]", error);
//             return errResponse(status.DAO_ERROR_MESSAGE);
//         } finally {
//             connection.release();
//         }
//     } catch (error) {
//         logger.error("[authProvider userList]", error);
//         return errResponse(status.PROVIDER_ERROR_MESSAGE);
//     }
// };

exports.createUser = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.postUser(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao postUser]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider createUser]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.createTraceItem = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.postTraceItem(connection, Info);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao postTraceItem]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider createTraceItem]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.createKakaoUser = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.postKakaoUser(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao postKakaoUser]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider createKakaoUser]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.creategoogleUser = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.postgoogleUser(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao postgoogleUser]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider creategoogleUser]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.checkUserId = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.selectUserId(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao selectUserId]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider checkUserId]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.checkUserPassword = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.selectUserPassword(
                connection,
                userInfo
            );
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao selectUserPassword]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider checkUserPassword]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.localUser = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.LocalStrategyUser(
                connection,
                userInfo
            );
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao LocalStrategyUser]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider localUser]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.kakaoUser = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.selectKakaoUser(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao selectKakaoUser]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider kakaoUser]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.googleUser = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.selectgoogleUser(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao selectgoogleUser]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider googleUser]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};
