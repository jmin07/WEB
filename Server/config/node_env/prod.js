module.exports = {
    port: process.env.HTTP_PORT,
    cors: {
        whitelist: [
            "https://www.watchrabbit.co.kr",
            "https://www.watchrabbit.co.kr:8443",
        ],
    },
    callback: {
        kakao: "https://www.watchrabbit.co.kr:8443/auth/kakao/callback",
        google: "https://www.watchrabbit.co.kr:8443/auth/google/callback",
    },
    redirect: {
        main: "https://www.watchrabbit.co.kr/main",
    },
    awsEmail: {
        id: process.env.AWS_EMAIL_ID,
        accessKey: process.env.AWS_ACCESS_KEY,
        secretKey: process.env.AWS_ACCESS_SECRET_KEY,
    },
    awsDB: {
        host: process.env.AWS_DB_HOST,
        user: process.env.AWS_DB_USER,
        port: process.env.AWS_DB_PORT,
        password: process.env.AWS_DB_PASSWORD,
        dataBase: process.env.AWS_DATABASE,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        id: process.env.REDIS_ID,
        password: process.env.REDIS_PASSWORD,
    },
};
