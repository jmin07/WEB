const logger = require("../../middleware/package/logg");
const {
    User,
    Trace,
} = require("../../middleware/package/sequelize/models/index");

exports.emailCheck = async (info) => {
    try {
        const result = await User.findAll({
            attributes: ["email", "password"],
            where: {
                email: info.email,
            },
        });
        return result;
    } catch (error) {
        logger.error("[commonDao emailCheck] \n", error);
    }
};

exports.createTraceItem = async (info) => {
    try {
        const result = await Trace.create({
            userIdx: info.userIdx,
            traceIdx: info.traceIdx,
        });
        return result;
    } catch (error) {
        logger.error("[commonDao createTraceItem] \n", error);
    }
};

exports.checkUserIdx = async (connection, email) => {
    const selectUserIdxQuery = `
        SELECT id
        FROM User
        WHERE email = ?;
    `;

    const [userId] = await connection.query(selectUserIdxQuery, email);

    return userId;
};
