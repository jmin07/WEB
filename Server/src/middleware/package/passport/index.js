const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const google = require("./googleStrategy");
const commonDao = require("../../../app/commonDao/commonDao");

module.exports = () => {
    passport.serializeUser((user, done) => {
        // session 에 passport 객체 생성 및 email 값을 추가
        return done(null, user);
    });

    passport.deserializeUser(async (user, done) => {
        // 인증 후, 페이지 접근시 마다 사용자 정보를 Session 에서 읽어온다.
        const users = await commonDao.emailCheck({ email: user.email }); // 이메일 검증

        if (users.length >= 1) {
            done(null, user);
        }
    });

    local();
    kakao();
    google();
};
