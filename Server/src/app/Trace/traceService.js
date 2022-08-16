const traceProvider = require("./traceProvider");
const logger = require("../../middleware/package/logg/logger");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

module.exports.checkUserEmail = async (email) => {
    try {
        const EmailProvider = await traceProvider.checkEmail([email]);
        if (EmailProvider.length >= 1) {
            return response(status.EXIST_EMAIL_SUCCESS, EmailProvider[0]);
        } else {
            logger.error(
                `[traceService checkUserEmail] ${email} 이 존재하지 않습니다.`
            );
            return errResponse(status.EXIST_EMAIL_ERROR);
        }
    } catch (error) {
        logger.error("[traceService checkUserId] ", error);
    }
};

module.exports.checkUserStatus = async (userEmail, userIdx, traceIdx) => {
    try {
        const IdxProvider = await traceProvider.checkStatus([
            userIdx,
            traceIdx,
        ]);

        if (IdxProvider.length < 1) {
            return {
                isSuccess: false,
                code: 3000,
                message: "userIdx 가 존재하지 않습니다.",
            };
        }

        return {
            isSuccess: true,
            code: 3000,
            message: "userIdx 가 존재합니다.",
            result: {
                IdxProvider,
            },
        };
    } catch (error) {
        logger.error(`[traceService checkUserIdx] ${error}`);
    }
};

module.exports.activeTraceItem = async (
    City,
    Area,
    Value,
    MinPrice,
    MaxPrice,
    userIdx,
    traceIdx
) => {
    try {
        const traceProviderResult = await traceProvider.traceActiveItemTable([
            City,
            Area,
            Value,
            MinPrice,
            MaxPrice,
            userIdx,
            traceIdx,
        ]);
        logger.info("추적 기능이 활성화 되었습니다.");
        return response(
            {
                isSuccess: true,
                code: 3000,
                message: "추적 기능이 활성화 되었습니다.",
            },
            traceProviderResult
        );
    } catch (error) {
        logger.error("[traceService checkUserId] ", error);
    }
};

module.exports.inactiveTraceItem = async (userIdx, traceIdx) => {
    try {
        const traceProviderResult = await traceProvider.traceInActiveItemTable([
            userIdx,
            traceIdx,
        ]);

        logger.info("추적 기능이 비활성화 되었습니다.");
        return response(
            {
                isSuccess: true,
                code: 3000,
                message: "추적 기능이 비활성화 되었습니다.",
            },
            traceProviderResult
        );
    } catch (error) {
        logger.error("[traceService checkUserId] ", error);
    }
};

module.exports.checkTraceItem = async (userIdx, traceIdx) => {
    try {
        // traceTable 에서 조회 검색
        const selectTraceItem = await traceProvider.TraceItemTable([
            userIdx,
            traceIdx,
        ]);
        console.log("selectTraceItem", selectTraceItem);
        logger.info("테이블 조회가 되었습니다.");
        return response(
            {
                isSuccess: true,
                code: 3000,
                message: "테이블 조회가 되었습니다.",
            },
            selectTraceItem
        );
    } catch (error) {
        logger.error("[checkTraceItem] ", error);
    }
};
