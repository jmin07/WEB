const authService = require("./authService");
const passport = require("passport");
const logger = require("../../middleware/package/logg/logger");

const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");

/**
 * API No.1
 * API Name: 유저 생성(회원가입)
 * [POST] /auth/signup
 */
exports.postAuthSignUp = async (req, res) => {
    try {
        const { email, password } = req.body;

        const createResult = await authService.createUser(email, password);

        const result = createResult.isSuccess
            ? res.status(200).send(createResult)
            : res.status(400).send(createResult);
        return result;
    } catch (error) {
        return res.status(400).send(status.CONTROLLER_ERROR_MESSAGE);
    }
};

/**
 * API No.2
 * API Name: 유저 로그인
 * [POST] /auth/signin
 */

exports.postAuthLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            logger.error("[postAuthLogin] ", err);
            return next(err);
        }

        if (!user) {
            logger.info("유저 정보가 없어 로그인에 실패했습니다.");
            return res
                .status(400)
                .send(errResponse(status.SIGNIN_PASSWORD_EMAIL_ERROR));
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                logger.error(loginError);
            }
            logger.info(`${user.email} 님이 로그인에 성공했습니다.`);
            return res.status(200).send(info);
        });
    })(req, res, next);
};

/**
 * API No.3
 * API Name: 유저 로그아웃
 * [GET] /auth/logout
 */
exports.getAuthLogout = (req, res) => {
    const user = req.user;

    req.logout((err) => {
        if (err) {
            logger.error(err);
            return res
                .status(400)
                .send(errResponse(status.IS_LOGGED_OUT, { user }));
        }
        logger.info(`${user.email} 님이 로그아웃 되었습니다.`);
        return res.status(200).send(response(status.IS_LOGGED_OUT, { user }));
    });
};

/**
 * API No.4
 * API Name: 카카오톡  로그인
 * [GET] /auth/kakao
 */
exports.authKakaoLogin = (req, res, next) => {
    passport.authenticate("kakao")(req, res, next);
};

/**
 * API No.5
 * API Name: 카카오톡  로그인
 * [GET] /auth/kakao/callback
 */
exports.kakaoLogin = (req, res, next) => {
    passport.authenticate("kakao", (err, user, info) => {
        if (err) {
            logger.error(err);
            return next(err);
        }

        if (!user) {
            logger.info("카카오 로그인에 실패했습니다.");
            return res.status(400).send(errResponse(status.SIGNIN_ERROR));
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                logger.error(loginError);
            }
            logger.info(`${user.email} 님이 카카오 로그인에 성공했습니다.`);

            return res.redirect("https://www.watchrabbit.co.kr/main");
        });
    })(req, res, next);
};

/**
 * API No.6
 * API Name: 구글 로그인
 * [GET] /auth/google
 */
exports.authGoogleLogin = (req, res, next) => {
    passport.authenticate("google", { scope: ["profile", "email"] })(
        req,
        res,
        next
    );
};

/**
 * API No.7
 * API Name: 구글 로그인
 * [GET] /auth/google/callback
 */
exports.googleLogin = (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
        if (err) {
            logger.error(err);
            return next(err);
        }

        if (!user) {
            logger.info("구글 로그인에 실패했습니다.");
            return res.status(400).send(errResponse(status.SIGNIN_ERROR));
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                logger.error(loginError);
            }
            logger.info(`${user.email} 님이 구글 로그인에 성공했습니다.`);
            return res.redirect("https://www.watchrabbit.co.kr/main");
        });
    })(req, res, next);
};

/**
 * API No.8
 * API Name: 로그인 상태 확인
 * [GET] /auth/loginstatus
 */
exports.authCheckLoign = (req, res) => {
    if (req.isAuthenticated()) {
        const profile_image = req.user.profile_image;
        return res.status(200).send(
            response(
                {
                    isSuccess: true,
                    code: 3000,
                    message: "로그인이 되어 있습니다.",
                },
                {
                    profile_image,
                }
            )
        );
    }
};
