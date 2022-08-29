const logger = require("../../middleware/package/logg");
const {
    User,
    Trace,
} = require("../../middleware/package/sequelize/models/index");

exports.snsCheckUser = async (info) => {
    try {
        const result = await User.findAll({
            attributes: ["email", "provider"],
            where: {
                email: info.email,
                provider: info.provider,
            },
        });
        return result;
    } catch (error) {
        logger.error("[authDao snsUser] \n", error);
    }
};

exports.createUser = async (info) => {
    try {
        const result = await User.create({
            email: info.email,
            password: info.password,
        });

        return result;
    } catch (error) {
        logger.error("[authDao createUser \n", error);
    }
};

exports.snsCreateUser = async (info) => {
    try {
        const result = await User.create({
            email: info.email,
            userImage: info.userImage,
            provider: info.provider,
        });
        return result;
    } catch (error) {
        logger.error("[authDao snsCreateUser] \n", error);
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
        logger.error("[authDao createTraceItem] \n", error);
    }
};
// exports.selectUserList = async (connection, userInfo) => {
//     const selectUserListQuery = `
//         SELECT email, password
//         FROM User
//         WHERE email = ? AND password = ?;
//     `;

//     const [userList] = await connection.query(selectUserListQuery, userInfo);

//     return userList;
// };

// exports.LocalStrategyUser = async (connection, userInfo) => {
//     const selectUserIdQuery = `
//         SELECT email, password
//         FROM User
//         WHERE email = ?;
//     `;

//     const [userId] = await connection.query(selectUserIdQuery, userInfo);

//     return userId;
// };

// exports.selectUserId = async (connection, userInfo) => {
//     const selectUserIdQuery = `
//         SELECT email
//         FROM User
//         WHERE email = ?;
//     `;

//     const [userId] = await connection.query(selectUserIdQuery, userInfo);

//     return userId;
// };

// // exports.selectKakaoUser = async (connection, userInfo) => {
// //     const selectKakaoQuery = `
// //         SELECT email, provider
// //         FROM User
// //         WHERE email = ? AND provider = ?;
// //     `;
// //     const [kakaoUser] = await connection.query(selectKakaoQuery, userInfo);

// //     return kakaoUser;
// // };

// // exports.selectgoogleUser = async (connection, userInfo) => {
// //     const selectGoogleQuery = `
// //         SELECT email, provider
// //         FROM User
// //         WHERE email = ? AND provider = ?;
// //     `;
// //     const [googleUser] = await connection.query(selectGoogleQuery, userInfo);

// //     return googleUser;
// // };

// exports.selectUserPassword = async (connection, userInfo) => {
//     const selectUserListQuery = `
//         SELECT password
//         FROM User
//         WHERE email = ? AND password = ?;
//     `;

//     const [userPassword] = await connection.query(
//         selectUserListQuery,
//         userInfo
//     );

//     return userPassword;
// };

// exports.postUser = async (connection, userInfo) => {
//     const insertUserQuery = `
//         INSERT INTO User(email, password)
//         VALUES (?, ?);
//     `;

//     const [Result] = await connection.query(insertUserQuery, userInfo);

//     return Result;
// };

// exports.postTraceItem = async (connection, Info) => {
//     const insertTraceItemQuery = `
//         INSERT INTO TraceItem(userIdx, traceIdx)
//         VALUES ?;
//     `;

//     const Result = await connection.query(insertTraceItemQuery, Info);
//     return Result;
// };

// exports.postKakaoUser = async (connection, userInfo) => {
//     const insertUserQuery = `
//         INSERT INTO User(email, provider)
//         VALUES (?, ?);
//     `;

//     const [insertUser] = await connection.query(insertUserQuery, userInfo);

//     return insertUser;
// };

// exports.postgoogleUser = async (connection, userInfo) => {
//     const insertUserQuery = `
//         INSERT INTO User(email, provider)
//         VALUES (?, ?);
//     `;

//     const [insertUser] = await connection.query(insertUserQuery, userInfo);

//     return insertUser;
// };
