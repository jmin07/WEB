exports.ItemList = async (connection, Info) => {
    const selectUserListQuery =
        "SELECT * FROM BackendTestDB WHERE Title LIKE " +
        connection.escape("%" + Info[0] + "%") +
        "AND Region LIKE " +
        connection.escape("%" + Info[1] + "%") +
        "AND Province LIKE " +
        connection.escape("%" + Info[2] + "%");

    const [userList] = await connection.query(selectUserListQuery, Info);

    return userList;
};

exports.TotalItem = async (connection, Info) => {
    const selectUserListQuery =
        "SELECT * FROM BackendTestDB WHERE Title LIKE " +
        connection.escape("%" + Info[0] + "%");

    const [userList] = await connection.query(selectUserListQuery, Info);

    return userList;
};
