const express = require("express");
const router = express.Router();
const userValidator = require("../../middleware/verification/validation/Validator");
const auth = require("./authController");

const {
    isLoggedIn,
    isNotLoggedIn,
} = require("../../middleware/verification/authentication/index");

router.post(
    "/signup",
    isNotLoggedIn,
    userValidator.signUp,
    auth.postAuthSignUp
);
router.post("/signin", isNotLoggedIn, auth.postAuthLogin);

router.get("/kakao", isNotLoggedIn, auth.authKakaoLogin);
router.get("/kakao/callback", auth.kakaoLogin);

router.get("/google", isNotLoggedIn, auth.authGoogleLogin);
router.get("/google/callback", auth.googleLogin);

router.get("/loginstatus", isLoggedIn, auth.authCheckLoign);
router.get("/logout", isLoggedIn, auth.getAuthLogout);

module.exports = router;
