const Sequelize = require("sequelize");

module.exports = class Reply extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                idx: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                    comment: "대댓글 인덱스",
                },
                userIdx: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    comment: "유저 인덱스",
                },
                communityIdx: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    comment: "게시글 인덱스",
                },
            },
            {
                sequelize,
                timestamps: true, // true: createdAt, updatedAt 을 자동으로 생성
                underscored: false, // false: 카멜방식, true: 스네이크 방식
                modelName: "Reply",
                tableName: "reply",
                paranoid: true, // true: deletedAt true or false // soft
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Reply.belongsTo(db.Comment, {
            foreignKey: "commentIdx",
            targetKey: "idx",
        });

        db.Reply.belongsTo(db.User, {
            foreignKey: "userIdx",
            targetKey: "idx",
        });
    }
};
