const express = require("express");
const router = express.Router();
const controller = require("./community.controller");
// const { upload } = require("../../middleware/package/multer");
const authentication = require("../../middleware/verification/authentication");

// 로그인 필요 없는 API

// No.1: 커뮤니티 게시글 페이지네이션(query)
router.get("/", controller.getCommunity);

// No.2: 커무니티 게시글 댓글
router.get("/:id/reply", controller.getCommunityReply);

// No.3: 커뮤니티 게시글 업로드
router.post("/new", authentication.isLoggedIn, controller.postCommunityItem);

// No.5: 커뮤니티 게시글 댓글 업로드
// router.post("/");
module.exports = router;
