const { DataTypes} = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Domain",
    {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
      name: {
        type: DataTypes.STRING,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    { timestamps: false }
  );
};
