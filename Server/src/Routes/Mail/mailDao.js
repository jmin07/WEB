module.exports.changePassword = async (connection, userInfo)=> {
    const selectUserIdQuery = `
        UPDATE User
        SET password = ?
        WHERE email = ?;
    `;

    const [userId] = await connection.query(selectUserIdQuery, userInfo);

    return userId;
}