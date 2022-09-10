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
 * API Name: 커뮤니티 게시글 댓글 가져오기
 * [POST] /community/:id/reply
 */
exports.getCommentItem = async (req, res) => {
    try {
        let result;
        req.user.email
            ? (result = await Service.getCommentItem({
                  id: req.params.id,
                  userEmail: req.user.email,
              }))
            : (result = await Service.getCommentItem({ id: req.params.id }));

        return res.status(200).send(result);
    } catch (error) {
        log.error("[community Router getCommentItem] \n", error);
        return res.status(500).send("something broke");
    }
};

/**
 * API No.3
 * API Name: 커뮤니티 게시글 업로드
 * [POST] /community/post/test
 */
exports.postCommunityItem = async (req, res) => {
    try {
        const communityData = req.body;
        const userEmail = req.user.email;

        const result = await Service.postCommunityItem({
            ...communityData,
            userEmail,
        });

        return res.status(200).send(result);
    } catch (error) {
        log.error("[community Router postCommunityItem] \n", error);
        return res.status(500).send("something broke");
    }
};

/**
 * API No.4
 * API Name: 커뮤니티 게시글 댓글 업로드
 * [POST] /community/:id/reply/new
 */
exports.postCommentItem = async (req, res) => {
    try {
        const userEmail = req.user.email;
        const comment = req.body.comment;
        const commentIdx = req.params.id;

        const props = { userEmail, comment, commentIdx };
        const result = await Service.postCommentItem(props);
        console.log("result", result);
        if (result.isSuccess) {
            return res.status(200).send(result);
        } else {
            return res.status(400).send(result);
        }
    } catch (error) {
        log.error("[community Router postCommentItem] \n", error);
        return res.status(500).send("something broke");
    }
};
