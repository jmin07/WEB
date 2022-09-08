const express = require("express");
const router = express.Router();
const controller = require("./community.controller");
const upload = require("../../middleware/package/multer");
// const authentication = require("../../middleware/verification/authentication");

// 로그인 필요 없는 API

// No.1: 커뮤니티 게시글 페이지네이션(query)
router.get("/", controller.getCommunity);

// 로그인 필요 하는 API
// router.use(authentication.isLoggedIn);

// No.2: 커뮤니티 게시글 작성
router.post("/post", upload.single("image"), controller.postCommunityItem);

module.exports = router;
