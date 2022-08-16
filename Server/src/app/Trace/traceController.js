const traceService = require("./traceService");
const passport = require("passport");
const logger = require("../../middleware/package/logg/logger");
const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");

module.exports.postTraceItemTable = async (req, res) => {
    try {
        const traceIdx = parseInt(req.params.id);
        const { City, Area, Value, MinPrice, MaxPrice } = req.body;

        // 유저 이메일 확인(인증)
        const email = req.user[0].email;
        const resultEmail = await traceService.checkUserEmail(email);

        // 유저 이메일이 없으면 Stop
        if (!resultEmail.isSuccess) {
            logger.error(`${resultEmail.message}`);
            return resultEmail;
        }

        // 유저 Idx 확인(인가)
        //  checkUserIdx 는 status 를 반환
        const userIdx = resultEmail.result.id;

        const userEmail = resultEmail.result.email;
        const resultUserIdx = await traceService.checkUserStatus(
            userEmail,
            userIdx,
            traceIdx
        );
        const traceItemStatus = resultUserIdx.result.IdxProvider[0].status;

        // Status 가 INACTIVE OR ACTIE 확인
        // 만약 INACTIVE -> ACTIVE
        if (traceItemStatus === "INACTIVE") {
            const resultTraceITem = await traceService.activeTraceItem(
                City,
                Area,
                Value,
                MinPrice,
                MaxPrice,
                userIdx,
                traceIdx
            );
            return res.status(200).send(resultTraceITem);
            // ACTIVE => INACTIVE
        } else if (traceItemStatus === "ACTIVE") {
            const resultTraceITem = await traceService.inactiveTraceItem(
                userIdx,
                traceIdx
            );
            return res.status(200).send(resultTraceITem);
        }
    } catch (error) {
        logger.error("[traceController postUpdateDb] ", error);
    }
};

module.exports.postTraceItem = async (req, res) => {
    try {
        const { traceIdx } = req.body;
        const userEmail = req.user.email;

        console.log("traceIdx", traceIdx);
        // 이메일 확인
        const resultEmail = await traceService.checkUserEmail(userEmail);

        // 유저 이메일 없으면 return
        if (!resultEmail.isSuccess) {
            logger.error(`${resultEmail.message}`);
            return res.status(403).send(resultEmail);
        }

        // 유저 이메일 있으면
        const userIdx = resultEmail.result.id;

        const resultTraceItem = await traceService.checkTraceItem(
            userIdx,
            traceIdx
        );
        return res.status(200).send(resultTraceItem);
    } catch (error) {
        logger.error("[getTraceItem] ", error);
    }
};
