import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";

class User extends Model {}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATE,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "User",
    underscored: true,
    timestamps: false,
  }
);

export { User };
