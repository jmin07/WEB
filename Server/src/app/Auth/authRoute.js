// EXPRESS
const express = require("express");
const router = express.Router();
const userValidator = require("../../middleware/verification/validation/Validator");
// CONTROLLER
const auth = require("./authController");

// Login Check
const {
    isLoggedIn,
    isNotLoggedIn,
} = require("../../middleware/verification/authentication/index");

// 유저 회원가입
router.post(
    "/signup",
    isNotLoggedIn,
    userValidator.signUp,
    auth.postAuthSignUp
);

// 유저 로그인
router.post("/signin", isNotLoggedIn, auth.postAuthLogin);

// 카카오톡 로그인
router.get("/kakao", isNotLoggedIn, auth.authKakaoLogin); // controller 로 이동 필요
router.get("/kakao/callback", auth.kakaoLogin);

// 구글 로그인
router.get("/google", isNotLoggedIn, auth.authGoogleLogin);
router.get("/google/callback", auth.googleLogin);

// 로그인 유지
router.get("/loginstatus", isLoggedIn, auth.authCheckLoign);

// 유저 로그아웃
router.get("/logout", isLoggedIn, auth.getAuthLogout);

module.exports = router;
