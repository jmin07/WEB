const express = require("express");
const router = express.Router();
const controller = require("./community.controller");

// 로그인 필요 없는 API

// No.1: 커뮤니티 게시글 페이지네이션(query)
router.get("/", controller.getCommunity);

// No.2: 커뮤니티 게시글 작성
router.post("/post", controller.postCommunityItem);

// // No.2: 한 개 커뮤니티 게시글
// router.get("/post/:id", controller.getCommunityItem);

// 로그인 필요 하는 API

module.exports = router;
