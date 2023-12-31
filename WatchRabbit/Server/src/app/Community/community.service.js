const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");
const log = require("../../middleware/package/logg");

const Dao = require("./community.Dao");
const commonDao = require("../CommonDao/common.dao");

// 커뮤니티 게시글 가져오기
exports.getCommunity = async (Info) => {
    try {
        const result = await Dao.getCommunity(Info);
        return response(status.SERVICE_SUCCESS_MESSAGE, result);
    } catch (err) {
        log.error("[community Service getCommunity] \n", err);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};

// 커뮤니티 게시글 업로드
exports.postCommunityItem = async (Info) => {
    try {
        // 유저 인덱스 출력
        let userIdx = await commonDao.userIdxCheck({ Email: Info.userEmail });
        userIdx = userIdx.dataValues.idx;

        const postData = { ...Info, userIdx };

        // 게시글 업로드
        const result = await Dao.postCommunityItem(postData);
        return { isSuccess: true, message: "게시글 작성 완료" }; // 수정필요
    } catch (err) {
        log.error("[community Service postCommunityItem] \n", err);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};

// 커뮤니티 게시글 댓글 가져오기
exports.getCommentItem = async (Info) => {
    try {
        const comment = await Dao.getCommentItem(Info);
        console.log("comment", comment);
        return {
            isSuccess: true,
            message: "댓글 가져오기 성공",
            result: comment,
        };
    } catch (err) {
        log.error("[community Service getCommentItem] \n", err);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};

// 커뮤니티 게시글 댓글 업로드
exports.postCommentItem = async (Info) => {
    try {
        let userIdx = await commonDao.userIdxCheck({ Email: Info.userEmail });
        userIdx = userIdx.dataValues.idx;

        const props = { ...Info, userIdx };

        const result = await Dao.postCommentItem(props);
        return {
            isSuccess: true,
            message: "댓글 업로드 성공했습니다.",
            result,
        };
    } catch (err) {
        log.error("[community Service postCommentItem] \n", err);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};
