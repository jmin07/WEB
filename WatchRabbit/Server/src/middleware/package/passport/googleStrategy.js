const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/../../.env") });

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const commonDao = require("../../../app/commonDao/common.dao");
const config = require("../../../../config/node_env/key");
const log = require("../logg");

const status = require("../../../../config/response/responseStatus");
const {
    response,
    errResponse,
} = require("../../../../config/response/response");

module.exports = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
                callbackURL: config.callback.google, // 구글은 도메인이 들어가면 https 만 가능
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const user = await commonDao.snsCheckUser({
                        email: profile._json.email,
                        provider: profile.provider,
                    });

                    if (user.length >= 1) {
                        const newUser = {
                            email: profile._json.email,
                            profile_image: profile.photos[0].value,
                        };
                        return done(
                            null,
                            newUser,
                            response(status.SIGNIN_SUCCESS, newUser)
                        );
                    } else {
                        // 유저 조회가 없으면 DB 저장 후, 정보 넘김.
                        const User = await authDao.snsCreateUser({
                            email: profile._json.email,
                            userImage: profile.photos[0].value,
                            provider: profile.provider,
                        });

                        return done(
                            null,
                            User,
                            response(status.SIGNIN_SUCCESS, User)
                        );

                        // if (User.insertId) {
                        //     const userIdx = User.insertId;

                        //     // 유저 생성 후, trace Table 생성
                        //     for (let traceIdx = 1; traceIdx < 6; traceIdx++) {
                        //         await commonDao.createTraceItem({
                        //             userIdx,
                        //             traceIdx,
                        //         });
                        //     }

                        //     // TraceItem 테이블 생성
                        // }
                    }
                } catch (error) {
                    log.error("[googleStrategy]", error);
                }
            }
        )
    );
};
