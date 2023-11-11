const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                idx: {
                    type: Sequelize.BIGINT,
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
                    type: Sequelize.STRING(10),
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
                paranoid: true, // true: deletedAt true or false // soft
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.User.hasMany(db.Community, {
            foreignKey: "userIdx",
            sourceKey: "idx",
        }),
            db.User.hasMany(db.Comment, {
                foreignKey: "userIdx",
                sourceKey: "idx",
            }),
            db.User.hasMany(db.Like, {
                foreignKey: "userIdx",
                sourceKey: "idx",
            }),
            db.User.hasMany(db.Reply, {
                foreignKey: "userIdx",
                sourceKey: "idx",
            });
        // db.User.hasMany(db.Trace, {
        //     foreignKey: "userIdx",
        //     sourceKey: "idx",
        // });
    }
};
