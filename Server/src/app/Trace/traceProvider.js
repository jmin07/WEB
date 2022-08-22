const pool = require("../../middleware/package/Database/database");
const traceDao = require("./traceDao");
const logger = require("../../middleware/package/logg/logger");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

exports.checkEmail = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.checkUserEmail(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[checkEmail traceDao]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[checkEmail connection pool]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.checkStatus = async (userInfo) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await traceDao.Status(connection, userInfo);
            return Result;
        } catch (error) {
            logger.error("[checkUserIdx traceDao]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[checkUserIdx connection pool]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.traceActiveItemTable = async (Info) => {
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
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[TraceTable connection pool]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.traceInActiveItemTable = async (Info) => {
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
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[TraceTable connection pool]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.TraceItemTable = async (Info) => {
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
            return errResponse(status.DAO_ERROR_MESSAGE);
        }
    } catch (error) {
        logger.error("[TraceItemTable traceProvider]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};
