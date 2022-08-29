const Sequelize = require("sequelize");

module.exports = class Community extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                idx: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                    comment: "게시글 인덱스",
                },
                userIdx: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    comment: "유저 인덱스",
                },
                title: {
                    type: Sequelize.STRING(100), // 100 자 정도,
                    allowNull: false,
                    comment: "게시글 제목",
                },
                content: {
                    type: Sequelize.TEXT,
                    allowNull: true,
                    comment: "게시글 내용",
                },
                price: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                    defaultValue: "가격 없음",
                },
            },
            {
                sequelize,
                timestamps: true, // true: createdAt, updatedAt 을 자동으로 생성
                underscored: false, // false: 카멜방식, true: 스네이크 방식
                modelName: "Community",
                tableName: "community",
                paranoid: true, // true: deletedAt true or false // soft
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Community.hasMany(db.Comment, {
            foreignKey: "communityIdx",
            sourceKey: "idx",
        }),
            db.Community.hasMany(db.Like, {
                foreignKey: "communityIdx",
                sourceKey: "idx",
            }),
            db.Community.belongsTo(db.User, {
                foreignKey: "userIdx",
                targetKey: "idx",
            });
    }
};
