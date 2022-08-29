const cwProvider = require("./cwProvider");
const logger = require("../../middleware/package/logg");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

exports.cwTest = async (value, city, area) => {
    try {
        const totalResult = await cwProvider.TotalRegion([value]);
        if (city === "전국") {
            const Result =
                totalResult.length < 1
                    ? errResponse(status.SEARCH_ITEM_FAILURE)
                    : response(status.SEARCH_ITEM_SUCCESS, {
                          total: totalResult,
                      });
            return Result;
        } else {
            const localResult = await cwProvider.Test([value, city, area]);
            if (localResult.length < 1)
                return errResponse(status.SEARCH_ITEM_FAILURE);
            const searchItems = { local: localResult, total: totalResult };
            return response(status.SEARCH_ITEM_SUCCESS, searchItems);
        }
    } catch (error) {
        logger.error("cwTest", error);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};
