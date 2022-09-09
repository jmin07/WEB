const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");
const logger = require("../../middleware/package/logg");
const log = require("../../middleware/package/logg");
const {
    Community,
    Comment,
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

/**
 * 게시글 등록 DAO
 * @param {} Info
 * @returns
 */
exports.postCommunityItem = async (Info) => {
    try {
        const result = await Community.create({
            userIdx: Info.userIdx,
            img: Info.image,
            title: Info.title,
            content: Info.content,
            price: Info.price,
        });
        return result;
    } catch (error) {
        logger.error("[community Dao postCommunityItem] \n");
        return errResponse(status.DAO_ERROR_MESSAGE, {
            message: "community Dao Error",
        });
    }
};

/**
 *
 */
exports.getComment = async (Info) => {
    console.log("Info", Info);
    try {
        const result = await Comment.findAll({
            attributes: ["idx", "userIdx", "content"],
            where: {
                communityIdx: Info.id,
            },
        });
        return result;
    } catch (error) {
        logger.error("[community Dao getComment] \n", error);
        return errResponse(status.DAO_ERROR_MESSAGE, {
            message: "community Dao Error",
        });
    }
};
