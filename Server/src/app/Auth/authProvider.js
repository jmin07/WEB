const pool = require("../../middleware/package/Database/database");
const userDao = require("./authDao");
const logger = require("../../middleware/package/logg/logger");

module.exports.userList = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.selectUserList(connection, userInfo);
    connection.release();

    return Result;
};

// 로컬 유저 생성
module.exports.createUser = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.postUser(connection, userInfo);
    connection.release();

    return Result;
};

// 로컬 유저 추적 테이블 생성
module.exports.createTraceItem = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await userDao.postTraceItem(connection, Info);
            return Result;
        } catch (error) {
            logger.error("[authProvider userDao postTrace]", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[authProvider createTraceItem]", error);
    }
};

// 카카오톡 유저 생성
module.exports.createKakaoUser = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.postKakaoUser(connection, userInfo);
    connection.release();

    return Result;
};

// 구글 유저 생성
module.exports.creategoogleUser = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.postgoogleUser(connection, userInfo);
    connection.release();

    return Result;
};

module.exports.checkUserId = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.selectUserId(connection, userInfo);
    connection.release();

    return Result;
};

module.exports.checkUserPassword = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.selectUserPassword(connection, userInfo);
    connection.release();

    return Result;
};

module.exports.localUser = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.LocalStrategyUser(connection, userInfo);
    connection.release();

    return Result;
};

// 카카오 유저 조회
module.exports.kakaoUser = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.selectKakaoUser(connection, userInfo);
    connection.release();

    return Result;
};

// 구글 유저 조회
module.exports.googleUser = async (userInfo) => {
    const connection = await pool.getConnection(async (conn) => conn);
    const Result = await userDao.selectgoogleUser(connection, userInfo);
    connection.release();

    return Result;
};
