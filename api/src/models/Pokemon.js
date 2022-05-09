const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "pokemon",
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      life: {
        type: DataTypes.INTEGER,
      },
      strength: {
        // Fuerza
        type: DataTypes.INTEGER,
      },
      defense: {
        type: DataTypes.INTEGER,
      },
      speed: {
        //velocidad
        type: DataTypes.INTEGER,
      },
      height: {
        //altura
        type: DataTypes.INTEGER,
      },
      weight: {
        //peso
        type: DataTypes.INTEGER,
      },
      image: {
        type: DataTypes.STRING,
      },
      baseDatos: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
