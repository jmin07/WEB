const status = require("../../config/response/responseStatus");
const { response, errResponse } = require("../../config/response/response");
const logger = require("../logg/logger");

// 프론트에서 보내는 세션의 id 를 비교한다?
// req.isAuthenticated() 는 passport tu에서 제공하는 함수로, 현재 로그인 여부 ture, false 를 반환
module.exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        // res.locals.isAuthenticated = req.isAuthenticated();
        // res.locals.currentUser = req.user;
        next();
    } else {
        logger.error("로그인이 필요한 요청 입니다.");
        res.status(403).send(errResponse(stas.IS_NOT_LOGGEDIN));
    }
};

module.exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        logger.error("로그인 되어 있는 상태입니다.");
        res.status(403).send(errResponse(status.IS_LOGGEDIN));
        // const message = encodeURIComponent('로그인한 상태입니다.');
        // res.redirect(`/?error=${message}`);
    }
};
