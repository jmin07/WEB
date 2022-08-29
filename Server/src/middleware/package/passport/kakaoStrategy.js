const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/../../.env") }); // path.join(__dirname + '/../../.env')

const passport = require("passport");
const KakaoStrategy = require("passport-kakao").Strategy;

const commonDao = require("../../../app/commonDao/commonDao");
const config = require("../../../../config/node_env/key");
const logger = require("../logg");

const status = require("../../../../config/response/responseStatus");
const {
    response,
    errResponse,
} = require("../../../../config/response/response");

module.exports = () => {
    /**
     * clientID에 카카오 앱 아이디 추가
     * callbackURL: 카카오 로그인 후 카카오가 결과를 전송해줄 URL
     * accessToken, refreshToken: 로그인 성공 후 카카오가 보내준 토큰
     * profile: 카카오가 보내준 유저 정보. profile의 정보를 바탕으로 회원가입
     */
    passport.use(
        new KakaoStrategy(
            {
                clientID: process.env.KAKAO_ID,
                callbackURL: config.callback.kakao,
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    // 유저 조회
                    const exUser = await authDao.snsCheckUser({
                        email: profile._json.kakao_account.email,
                        provider: profile.provider,
                    });

                    if (exUser.length >= 1) {
                        const newUser = {
                            email: profile._json.kakao_account.email,
                            profile_image:
                                profile._json.properties.profile_image,
                        };
                        // 유저 조회가 있으면 정보 바로 넘김.
                        done(
                            null,
                            newUser,
                            response(status.SIGNIN_SUCCESS, newUser)
                        );
                    } else {
                        // 유저 조회가 없으면 DB 저장 후, 정보 넘김.
                        const User = await authDao.snsCreateUser({
                            email: profile._json.kakao_account.email,
                            userImage: profile._json.profile_image,
                            provider: profile.provider,
                        });

                        if (User.insertId) {
                            const userIdx = User.insertId;

                            // 유저 생성 후, trace Table 생성
                            for (let traceIdx = 1; traceIdx < 6; traceIdx++) {
                                await commonDao.createTraceItem({
                                    userIdx,
                                    traceIdx,
                                });
                            }

                            // TraceItem 테이블 생성
                            done(
                                null,
                                newUser,
                                response(status.SIGNIN_SUCCESS, newUser)
                            );
                        }
                    }
                } catch (err) {
                    logger.error("[passport KakaoStrategy]", err);
                }
            }
        )
    );
};
