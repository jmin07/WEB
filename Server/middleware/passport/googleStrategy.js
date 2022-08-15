const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/../../.env") });

const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const authProvider = require("../../Routes/Auth/authProvider");
const logger = require("../logg/logger");

const status = require("../../config/response/responseStatus");
const { response, errResponse } = require("../../config/response/response");

module.exports = () => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_ID,
                clientSecret: process.env.GOOGLE_SECRET,
                callbackURL:
                    "https://www.watchrabbit.co.kr:8443/auth/google/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                // console.log("google: ", profile._json.email, profile.provider);
                try {
                    const exUser = await authProvider.googleUser([
                        profile._json.email,
                        profile.provider,
                    ]);
                    const newUser = {
                        email: profile._json.email,
                        profile_image: profile.photos[0].value,
                    };

                    // console.log("exUser.length", exUser.length);
                    if (exUser.length >= 1) {
                        return done(
                            null,
                            newUser,
                            response(status.SIGNIN_SUCCESS, newUser)
                        );
                    } else {
                        // 유저 조회가 없으면 DB 저장 후, 정보 넘김.
                        const User = await authProvider.creategoogleUser([
                            profile._json.email,
                            profile.provider,
                        ]);

                        if (User.insertId) {
                            const userIdx = User.insertId;
                            const traceIdx = [1, 2, 3, 4, 5];

                            // // 유저 생성 후, trace Table 생성
                            let newTraceItem = new Array();
                            for (let i = 1; i < 6; i++) {
                                newTraceItem.push([userIdx, i]);
                            }

                            const traceItem =
                                await authProvider.createTraceItem([
                                    newTraceItem,
                                ]);

                            // TraceItem 테이블 생성
                            return done(
                                null,
                                newUser,
                                response(status.SIGNIN_SUCCESS, newUser)
                            );
                        }
                    }
                } catch (error) {
                    logger.error("[googleStrategy]", error);
                }
            }
        )
    );
};
