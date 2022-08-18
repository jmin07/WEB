exports.checkUserEmail = async (connection, userInfo) => {
    const selectUserEmailQuery = `
        SELECT email
        FROM User
        WHERE email = ?;
    `;

    const [userEmail] = await connection.query(selectUserEmailQuery, userInfo);

    return userEmail;
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
