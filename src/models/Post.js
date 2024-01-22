import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { User } from "./User.js";

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    subtitle: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    publicationAt: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Post",
    underscored: true,
    timestamps: false,
  }
);

export { Post };
