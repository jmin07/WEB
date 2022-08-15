const authService = require("./authService");
const passport = require("passport");
const logger = require("../../middleware/logg/logger");

const status = require("../../config/response/responseStatus");
const { response, errResponse } = require("../../config/response/response");

/**
 * API No.1
 * API Name: 유저 생성(회원가입)
 * [POST] /auth/signup
 */
module.exports.postAuthSignUp = async (req, res) => {
    const { email, password } = req.body;

    const createResult = await authService.createUser(email, password);

    if (createResult.isSuccess) {
        return res.status(200).send(createResult);
    } else {
        return res.status(400).send(createResult);
    }
};

/**
 * API No.2
 * API Name: 유저 로그인
 * [POST] /auth/signin
 */

// 로그인 정보가 DB와 같은 것인지 비교한다?
module.exports.postAuthLogin = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
        // LocalStrategy 실행 및 done 에서 넘겨주는 정보를 가지고 있다.
        // done의 결과를 return 해줘야한다.
        if (err) {
            logger.error("[postAuthLogin] ", err);
            return next(err);
        }

        // 만약 유저 정보가 없는 경우
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
    })(req, res, next); // 미들웨어 내에서 미들웨어
};

/**
 * API No.3
 * API Name: 유저 로그아웃
 * [GET] /auth/logout
 */
module.exports.getAuthLogout = (req, res) => {
    const user = req.user;
    req.session.destroy((err) => {
        if (err) {
            logger.error("[getAuthLogout] ", err);
        }
        logger.info(`${user.email} 님이 로그아웃 되었습니다.`);
        return res.status(200).send(response(status.IS_LOGGED_OUT, { user }));
        // return res.redirect("https://www.watchrabbit.co.kr");
    });
};

/**
 * API No.4
 * API Name: 카카오톡  로그인
 * [GET] /auth/kakao
 */
module.exports.authKakaoLogin = (req, res, next) => {
    passport.authenticate("kakao")(req, res, next);
};

/**
 * API No.5
 * API Name: 카카오톡  로그인
 * [GET] /auth/kakao/callback
 */
module.exports.kakaoLogin = (req, res, next) => {
    passport.authenticate("kakao", (err, user, info) => {
        if (err) {
            logger.error(err);
            return next(err);
        }

        // 만약 유저 정보가 없는 경우
        if (!user) {
            logger.info("카카오 로그인에 실패했습니다.");
            return res.status(400).send(errResponse(status.SIGNIN_ERROR));
        }

        return req.login(user, (loginError) => {
            if (loginError) {
                logger.error(loginError);
            }
            logger.info(`${user.email} 님이 카카오 로그인에 성공했습니다.`);
            // return res.status(200).send(info);
            // req.session.profile_image = info.result.profile_image;
            return res.redirect("https://www.watchrabbit.co.kr/main");
        });
    })(req, res, next);
};

/**
 * API No.6
 * API Name: 구글 로그인
 * [GET] /auth/google
 */
module.exports.authGoogleLogin = (req, res, next) => {
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
module.exports.googleLogin = (req, res, next) => {
    passport.authenticate("google", (err, user, info) => {
        if (err) {
            logger.error(err);
            return next(err);
        }

        // 만약 유저 정보가 없는 경우
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
module.exports.authCheckLoign = (req, res) => {
    // if (req.user !== undefined) {
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
