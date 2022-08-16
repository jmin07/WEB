const cwService = require("./cwService");
const logger = require("../../middleware/package/logg/logger");

const status = require("../../../config/response/responseStatus");
const { response, errResponse } = require("../../../config/response/response");

module.exports.postSearchItem = async (req, res) => {
    try {
        const user = req.user;
        const { value, city, area } = req.body;

        const cwResult = await cwService.cwTest(value, city, area);
        if (req.user === undefined) {
            logger.info(`비회원이 ${value}를 검색했습니다.`);
        } else {
            logger.info(
                `${user.email} 가 ${city}의 ${area}에서 ${value}를 검색했습니다.`
            );
        }
        return res.status(200).send(cwResult);
    } catch (error) {
        logger.error("[postSearchItem]", error);
        return res.status(400).send({ message: "에러가 발생했습니다." });
    }
};
