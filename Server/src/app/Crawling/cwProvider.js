const pool = require("../../middleware/package/Database/database");
const cwDao = require("../Crawling/cwDao");

module.exports.Test = async (Info) => {
    const connection = await pool.getConnection(async (conn) => conn);

    const Result = await cwDao.ItemList(connection, Info);
    connection.release();

    return Result;
};

module.exports.TotalRegion = async (Info) => {
    const connection = await pool.getConnection(async (conn) => conn);

    const Result = await cwDao.TotalItem(connection, Info);
    connection.release();

    return Result;
};
