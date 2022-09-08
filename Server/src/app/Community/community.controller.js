// config
const log = require("../../middleware/package/logg");
const Service = require("./community.service");
const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");
const { Community } = require("../../middleware/package/sequelize/models");

/**
 * API No.1
 * API Name: 커뮤니티 게시글 페이지네이션
 * [GET] /community/post?order=${order}&offset=${offset}&limit=${limit}
 */
exports.getCommunity = async (req, res) => {
    try {
        const { order, offset, limit } = req.query;
        let result = await Service.getCommunity({ order, offset, limit });

        const returnResult = result.isSuccess
            ? res.status(200).send(result)
            : res
                  .status(400)
                  .send(response(status.CONTROLLER_SUCCESS_MESSAGE, result));
        return returnResult;
    } catch (error) {
        log.error("[community Router getCommunity] \n", error);
        return res.status(500).send("something broke");
    }
};

/**
 * API No.2
 * API Name: 커뮤니티 게시글 작성
 * [POST] /community/post
 */
exports.postCommunityItem = async (req, res) => {
    try {
        console.log("req.file", req.file);
        console.log("req.body", req.body);
        // const { id } = req.body;

        // const result = Service.Community;
    } catch (error) {}
};
