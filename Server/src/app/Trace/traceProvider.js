const pool = require("../../middleware/package/Database/database");
const traceDao = require("./traceDao");
const logger = require("../../middleware/package/logg/logger");

module.exports.checkEmail = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.checkUserEmail(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[checkEmail traceDao]", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[checkEmail connection pool]", error);
    }
};

module.exports.checkStatus = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.Status(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[checkUserIdx traceDao]", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[checkUserIdx connection pool]", error);
    }
};

module.exports.traceActiveItemTable = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.updateActiveTraceItem(
                connection,
                Info
            );
            return Result;
        } catch (error) {
            logger.error("[TraceTable traceDao]", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[TraceTable connection pool]", error);
    }
};

module.exports.traceInActiveItemTable = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.updateInActiveTraceItem(
                connection,
                Info
            );
            return Result;
        } catch (error) {
            logger.error("[TraceTable traceDao]", error);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[TraceTable connection pool]", error);
    }
};

module.exports.TraceItemTable = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.selectTraceItemTable(
                connection,
                Info
            );
            return Result;
        } catch (error) {
            logger.error("[selectTraceItemTable traceDao]", error);
        }
    } catch (error) {
        logger.error("[TraceItemTable traceProvider]", error);
    }
};
