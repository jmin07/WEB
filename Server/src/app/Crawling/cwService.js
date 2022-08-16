const cwProvider = require("./cwProvider");
const logger = require("../../middleware/package/logg/logger");
const { response, errResponse } = require("../../../config/response/response");
const status = require("../../../config/response/responseStatus");

module.exports.cwTest = async (value, city, area) => {
    console.log(value, city, area);
    try {
        console.log("city:", city);

        const totalResult = await cwProvider.TotalRegion([value]);
        if (city === "전국") {
            if (totalResult.length < 1)
                return errResponse(status.SEARCH_ITEM_FAILURE);
            return response(status.SEARCH_ITEM_SUCCESS, { total: totalResult });
        } else {
            const localResult = await cwProvider.Test([value, city, area]);
            console.log("localResult", localResult.length);
            if (localResult.length < 1)
                return errResponse(status.SEARCH_ITEM_FAILURE);
            const searchItems = { local: localResult, total: totalResult };
            return response(status.SEARCH_ITEM_SUCCESS, searchItems);
        }
    } catch (error) {
        logger.error("cwTest", error);
    }
};
