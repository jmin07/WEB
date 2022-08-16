const logger = require("../../middleware/package/logg/logger");

// 유저 조회(이메일 및 비밀번호 확인)
module.exports.selectUserList = async (connection, userInfo) => {
    const selectUserListQuery = `
        SELECT email, password
        FROM User
        WHERE email = ? AND password = ?;
    `;

    const [userList] = await connection.query(selectUserListQuery, userInfo);

    return userList;
};

// 유저 조회(이메일만 확인)
module.exports.LocalStrategyUser = async (connection, userInfo) => {
    const selectUserIdQuery = `
        SELECT email, password
        FROM User
        WHERE email = ?;
    `;

    const [userId] = await connection.query(selectUserIdQuery, userInfo);

    return userId;
};

// 유저 아이디 조회
module.exports.selectUserId = async (connection, userInfo) => {
    const selectUserIdQuery = `
        SELECT email
        FROM User
        WHERE email = ?;
    `;

    const [userId] = await connection.query(selectUserIdQuery, userInfo);

    return userId;
};

// 카카오 아이디 조회
module.exports.selectKakaoUser = async (connection, userInfo) => {
    const selectKakaoQuery = `
        SELECT email, provider
        FROM User
        WHERE email = ? AND provider = ?;
    `;
    const [kakaoUser] = await connection.query(selectKakaoQuery, userInfo);

    return kakaoUser;
};

// 구글 아이디 조회
module.exports.selectgoogleUser = async (connection, userInfo) => {
    const selectGoogleQuery = `
        SELECT email, provider
        FROM User
        WHERE email = ? AND provider = ?;
    `;
    const [googleUser] = await connection.query(selectGoogleQuery, userInfo);

    return googleUser;
};

// 유저 비밀번호 조회
module.exports.selectUserPassword = async (connection, userInfo) => {
    const selectUserListQuery = `
        SELECT password
        FROM User
        WHERE email = ? AND password = ?;
    `;

    const [userPassword] = await connection.query(
        selectUserListQuery,
        userInfo
    );

    return userPassword;
};

// 유저 생성
module.exports.postUser = async (connection, userInfo) => {
    const insertUserQuery = `
        INSERT INTO User(email, password)
        VALUES (?, ?);
    `;

    const [Result] = await connection.query(
        insertUserQuery,
        userInfo,
        (error, result) => {
            if (error) {
                logger.error("[authDao postUser]\n", error);
                throw error;
            }
        }
    );

    return Result;
};

// 추적 기능 테이블 생성
module.exports.postTraceItem = async (connection, Info) => {
    const insertTraceItemQuery = `
        INSERT INTO TraceItem(userIdx, traceIdx)
        VALUES ?;
    `;

    const Result = await connection.query(
        insertTraceItemQuery,
        Info,
        (error, result) => {
            if (error) {
                logger.error("[authDao postTrace]\n", error);
                throw error;
            }
        }
    );
    return Result;
};

// 카카오톡 유저 생성
module.exports.postKakaoUser = async (connection, userInfo) => {
    const insertUserQuery = `
        INSERT INTO User(email, provider)
        VALUES (?, ?);
    `;

    const [insertUser] = await connection.query(
        insertUserQuery,
        userInfo,
        (error, result) => {
            if (error) throw error;
        }
    );

    return insertUser;
};

// 구글 유저 생성
module.exports.postgoogleUser = async (connection, userInfo) => {
    const insertUserQuery = `
        INSERT INTO User(email, provider)
        VALUES (?, ?);
    `;

    const [insertUser] = await connection.query(
        insertUserQuery,
        userInfo,
        (error, result) => {
            if (error) throw error;
        }
    );

    return insertUser;
};
