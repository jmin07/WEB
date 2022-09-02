const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");
const log = require("../../middleware/package/logg");

const Dao = require("./community.Dao");

exports.getCommunity = async (Info) => {
    try {
        const result = await Dao.getCommunity(Info);
        // console.log("result", result);
        // console.log(
        //     "response",
        //     response(status.SERVICE_SUCCESS_MESSAGE, result)
        // );
        return result;
    } catch (err) {
        log.error("[community Service getCommunity] \n", err);
        return errResponse(status.SERVICE_ERROR_MESSAGE);
    }
};
