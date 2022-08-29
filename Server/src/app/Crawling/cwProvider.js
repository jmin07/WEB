const pool = require("../../middleware/package/Database");
const cwDao = require("../Crawling/cwDao");
const { errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

exports.Test = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await cwDao.ItemList(connection, Info);
            return Result;
        } catch (error) {
            logger.error("[cwProvider cwDao ItemList]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[cwProvider Test]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};

exports.TotalRegion = async (Info) => {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        try {
            const Result = await cwDao.TotalItem(connection, Info);
            return Result;
        } catch (error) {
            logger.error("[cwProvider cwDao TotalRegion]", error);
            return errResponse(status.DAO_ERROR_MESSAGE);
        } finally {
            connection.release();
        }
    } catch (error) {
        logger.error("[cwProvider TotalRegion]", error);
        return errResponse(status.PROVIDER_ERROR_MESSAGE);
    }
};
