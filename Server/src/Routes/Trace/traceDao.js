// Email 조회
module.exports.checkUserEmail = async (connection, userInfo) => {
    const selectUserEmailQuery = `
        SELECT id, email
        FROM User
        WHERE email = ?;
    `;

    const [userEmail] = await connection.query(selectUserEmailQuery, userInfo);

    return userEmail;
};

// 등록된 테이블의 userIdx 조회
module.exports.Status = async (connection, userInfo) => {
    const selectUserIdxQuery = `
        SELECT status
        FROM TraceItem
        WHERE userIdx =? AND traceIdx = ?;
    `;

    const [userId] = await connection.query(selectUserIdxQuery, userInfo);

    return userId;
};

// Insert userIdx, traceIdx to Trace
// UPDATE 로 사용해도 되지 않을까?
module.exports.updateTrace = async (connection, Info) => {
    const updateTraceQuery = `
        INSERT INTO Trace (userIdx, traceIdx)
        VALUES (?, ?)
    `;
    const [Result] = await connection.query(checkTraceStatusQuery, Info);
};

// INACTIVE -> ACTIVE
module.exports.updateActiveTraceItem = async (connection, Info) => {
    const selectTraceIdQuery = `
        UPDATE TraceItem 
        SET status = 'ACTIVE', region = ?, province = ?, product = ?, minPrice = ?, maxPrice = ?
        WHERE userIdx = ? AND traceIdx = ?
    `;

    const [userId] = await connection.query(selectTraceIdQuery, Info);

    return userId;
};

// ACTIVE => INACTIVE
module.exports.updateInActiveTraceItem = async (connection, Info) => {
    const selectTraceIdQuery = `
        UPDATE TraceItem 
        SET status = 'INACTIVE', region = null, province = null, product = null, minPrice = null, maxPrice = null
        WHERE userIdx = ? AND traceIdx = ?
    `;

    const [userId] = await connection.query(selectTraceIdQuery, Info);

    return userId;
};

module.exports.selectTraceItemTable = async (connection, Info) => {
    const checkTraceStatusQuery = `
        SELECT region, province, product, minPrice, maxPrice
        FROM TraceItem
        WHERE userIdx = ? AND traceIdx = ?
    `;

    const [Result] = await connection.query(checkTraceStatusQuery, Info);

    return Result;
};
