const { sequelize } = require("../services/sequelize");
const { DataTypes } = require("sequelize");

const Recipe = sequelize.define(
  "Recipe",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    author_id: {
      type: DataTypes.UUID,
      references: {
        model: "users", // Assumes the Users model is defined elsewhere
        key: "id",
      },
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    cuisine_type: {
      type: DataTypes.STRING(50),
    },
    difficulty: {
      type: DataTypes.STRING(20),
    },
    prep_time: {
      type: DataTypes.INTEGER,
    },
    cook_time: {
      type: DataTypes.INTEGER,
    },
    servings: {
      type: DataTypes.INTEGER,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    freezeTableName: true, //to not pluralize the table name when I don't specify table name
    tableName: "recipes", // Specify table name
    timestamps: false, // Disable automatic timestamps (since you manually set them)
    underscored: true, // This ensures snake_case column names are used
  }
);

module.exports = Recipe;
