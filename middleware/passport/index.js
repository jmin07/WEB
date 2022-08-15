const passport = require("passport");
const local = require("./localStrategy");
const kakao = require("./kakaoStrategy");
const google = require("./googleStrategy");
const authProvider = require("../../Routes/Auth/authProvider");

// 프론트는 session 을 보내준다?

// serializeUser 는 login 할 때 DB에서 발견한 user를 어떻게 저장하는지 방법
// deserializeUser 는
module.exports = () => {
    passport.serializeUser((user, done) => {
        // session 에 passport 객체 생성 및 email 값을 추가
        return done(null, user);
    });

    passport.deserializeUser(async (user, done) => {
        // 인증 후, 페이지 접근시 마다 사용자 정보를 Session 에서 읽어온다.
        const users = await authProvider.checkUserId([user.email]); // 이메일 검증

        if (users.length >= 1) {
            done(null, user);
        }
    });

    local();
    kakao();
    google();
};
