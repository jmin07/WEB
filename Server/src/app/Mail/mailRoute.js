// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLER
const mail = require("./mailController");

// 인증 번호 요청
router.post("/auth", mail.getAuthentication);

// 비밀번호 변경 요청
router.post("/pwd", mail.getChangePassword);

module.exports = router;
