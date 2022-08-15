// Email 조회
module.exports.checkUserEmail = async (connection, userInfo) => {
    const selectUserEmailQuery = `
        SELECT email
        FROM User
        WHERE email = ?;
    `;

    const [userEmail] = await connection.query(selectUserEmailQuery, userInfo);

    return userEmail;
};

// userIdx 조회
module.exports.checkUserIdx = async (connection, email) => {
    const selectUserIdxQuery = `
        SELECT id
        FROM User
        WHERE email = ?;
    `;

    const [userId] = await connection.query(selectUserIdxQuery, email);

    return userId;
};

// // 비밀 조회
// module.exports.checkPassword = async (connection, userInfo) => {
//     const selectUserIdQuery = `
//         SELECT email, password
//         FROM User
//         WHERE email = ?;
//     `;

//     const [userId] = await connection.query(selectUserIdQuery, userInfo);

//     return userId;
// };

// // "이메일"을 사용해서 이메일 및 비밀번호 조회
// module.exports.checkEmailPassword = async (connection, userInfo) => {
//     const selectUserIdQuery = `
//         SELECT email, password
//         FROM User
//         WHERE email = ?;
//     `;

//     const [userId] = await connection.query(selectUserIdQuery, userInfo);

//     return userId;
// };
