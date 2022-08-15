const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const authProvider = require("../../Routes/Auth/authProvider");
const logger = require("../logg/logger");

const status = require("../../config/response/responseStatus");
const { response, errResponse } = require("../../config/response/response");

// 유저 정보 인증 전략 방법
module.exports = () => {
    passport.use(
        new LocalStrategy(
            {
                // 오버라이딩
                usernameField: "email", // req.body.email
                passwordField: "password", // req.body.password
            },
            async (email, password, done) => {
                // 로그인 하는 유저 정보가 들어온다.

                try {
                    // 유저 조회
                    const exUser = await authProvider.localUser([email]);

                    if (exUser.length < 1) {
                        // 1. 유저 아이디 없다면
                        logger.error("PASSPORT 유저 아이디 불일치");
                        return done(null, false, {
                            isSuccess: false,
                            message: "아이디 및 비밀번호가 일치하지 않습니다.",
                        });
                    } else {
                        // 2. 유저 아이디가 있다면
                        const hashPassword = await bcrypt.compare(
                            password,
                            exUser[0].password
                        ); // 비밀번호 암호화

                        // 3. 유저 비밀번호가 일치하면
                        // 성공하면 유저 정보를 passport.authenticate(err, user, info) 로 넘겨준다.
                        if (hashPassword) {
                            exUser[0]["profile_image"] =
                                "https://watchrabbit.s3.ap-northeast-2.amazonaws.com/carrot+(1).png";
                            return done(
                                null,
                                exUser[0],
                                response(status.SIGNIN_SUCCESS, exUser[0])
                            );
                        } else {
                            logger.error("비밀번호 불일치");
                            return done(
                                null,
                                false,
                                errResponse(status.SIGNIN_PASSWORD_EMAIL_ERROR)
                            );
                        }
                    }
                } catch (error) {
                    logger.error(error);
                }
            }
        )
    );
};
