const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "types",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        primarykey: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
