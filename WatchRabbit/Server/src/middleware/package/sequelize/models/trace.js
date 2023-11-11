const Sequelize = require("sequelize");

module.exports = class Trace extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                idx: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    allowNull: false,
                    comment: "추적 아이템 인덱스",
                },
                userIdx: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    comment: "유저 인덱스",
                },
                traceIdx: {
                    type: Sequelize.BIGINT,
                    allowNull: false,
                    comment: "상품 인덱스",
                },
                status: {
                    type: Sequelize.STRING(10),
                    allowNull: false,
                    defaultValue: "Inactive",
                },
                province: {
                    type: Sequelize.STRING(45),
                    allowNull: true,
                },
                product: {
                    type: Sequelize.STRING(45),
                    allowNull: true,
                },
                minPrice: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
                maxPrice: {
                    type: Sequelize.INTEGER,
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true, // true: createdAt, updatedAt 을 자동으로 생성
                underscored: false, // false: 카멜방식, true: 스네이크 방식
                modelName: "TraceItem",
                tableName: "traceItem",
                paranoid: true, // true: deletedAt true or false // soft
                charset: "utf8mb4",
                collate: "utf8mb4_general_ci",
            }
        );
    }

    static associate(db) {
        db.Trace.belongsTo(db.User, {
            foreignKey: "userIdx",
            targetKey: "idx",
        });
    }
};
