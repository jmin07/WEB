const Sequelize = require("sequelize");

module.exports = class Comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                idx: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                    comment: "댓글 인덱스",
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
                content: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                    comment: "댓글 내용",
                },
            },
            {
                sequelize,
                timestamps: true, // true: createdAt, updatedAt 을 자동으로 생성
                underscored: false, // false: 카멜방식, true: 스네이크 방식
                modelName: "Comment",
                tableName: "comment",
                paranoid: true, // true: deletedAt true or false // soft
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Comment.belongsTo(db.User, {
            foreignKey: "userIdx",
            targetKey: "idx",
        });
        db.Comment.belongsTo(db.Community, {
            foreignKey: "communityIdx",
            targetKey: "idx",
        });
    }
};
