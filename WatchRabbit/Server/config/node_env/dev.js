module.exports = {
    env: process.env.NODE_ENV,
    port: process.env.HTTPS_PORT,
    cors: {
        whitelist: [
            "https://www.watchrabbit.co.kr",
            "http://www.watchrabbit.co.kr:3000",
            "https://www.watchrabbit.co.kr:8443",
        ],
    },
    callback: {
        kakao: "http://www.watchrabbit.co.kr:8443/auth/kakao/callback",
        google: "https://www.watchrabbit.co.kr:8443/auth/google/callback",
    },
    redirect: {
        main: "http://www.watchrabbit.co.kr:3000/main",
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
    s3: {
        accessKey: process.env.AWS_S3_ACCESS_KEY,
        secretKey: process.env.AWS_S3_SECRET_KEY,
        region: process.env.AWS_S3_REGION,
    },
};
