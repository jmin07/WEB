// config
const log = require("../../middleware/package/logg");
const Service = require("./community.service");
const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");

/**
 * API No.1
 * API Name: 커뮤니티 게시글 페이지네이션
 * [GET] /community/post?order=${order}&offset=${offset}&limit=${limit}
 */
exports.getCommunity = async (req, res) => {
    try {
        const { order, offset, limit } = req.query;
        const result = await Service.getCommunity({ order, offset, limit });
        console.log(result);
        if (!result.isSuccess) {
            return res
                .status(400)
                .send(response(status.CONTROLLER_SUCCESS_MESSAGE, result));
        }

        return res.status(200).send(result);
    } catch (error) {
        log.error("[community Router getCommunity] \n", error);
        return res.status(500).send("something broke");
    }
};

/**
 * API No.2
 * API Name: 커뮤니티 특정 게시글 보기
 * [GET] /community/post/:id
 */
exports.getCommunityItem = async (req, res) => {
    try {
        const { id } = req.param;
    } catch (error) {}
};
