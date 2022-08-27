const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                },
                email: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                    unique: false,
                    comment: "유저 아이디",
                },
                password: {
                    type: Sequelize.TEXT,
                    allowNull: false,
                    unique: true,
                },
                userImage: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                status: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    defaultValue: "Active",
                },
                provider: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    defaultValue: "local",
                },
            },
            {
                sequelize,
                timestamps: true, // true: createdAt, updatedAt 을 자동으로 생성
                underscored: false, // false: 카멜방식, true: 스네이크 방식
                modelName: "User",
                tableName: "user",
                paranoid: false, // true: deletedAt true or false // soft
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }
};
