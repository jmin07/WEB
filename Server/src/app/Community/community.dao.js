const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");
const log = require("../../middleware/package/logg");
const {
    Community,
    User,
} = require("../../middleware/package/sequelize/models/index");

/**
 * @param {Info} - order, limit, offset of pagination
 * @returns SELECT * FROM community ORDER BY {Info.order} ASC LIMIT {Info.limit} OFFSET {Info.offset};
 * @returns SELECT * FROM community ORDER BY {Info.order} ASC LIMIT {Info.offset}, {Info.limit};
 */
exports.getCommunity = async (Info) => {
    try {
        const result = await Community.findAll({
            attributes: [
                "idx",
                "img",
                "price",
                "title",
                "content",
                "createdAt",
            ],
            limit: parseInt(Info.limit),
            offset: parseInt(Info.offset),
            order: [[`${Info.order}`, "ASC"]],
        });
        return result;
    } catch (error) {
        log.error("[community Dao getCommunity] \n", error);
        return errResponse(status.DAO_ERROR_MESSAGE, {
            message: "community Dao Error",
        });
    }
};
