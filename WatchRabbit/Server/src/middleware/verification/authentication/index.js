const status = require("../../../../config/response/responseStatus");
const {
    response,
    errResponse,
} = require("../../../../config/response/response");
const logger = require("../../package/logg");

module.exports.isLoggedIn = (req, res, next) => {
    console.log("req.isAuthenticated()", req.isAuthenticated());
    if (req.isAuthenticated()) {
        next();
    } else {
        logger.error("로그인이 필요한 요청 입니다.");
        res.status(403).send(errResponse(status.IS_NOT_LOGGEDIN));
    }
};

module.exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        logger.error("로그인 되어 있는 상태입니다.");
        res.status(403).send(errResponse(status.IS_LOGGEDIN));
    }
};
