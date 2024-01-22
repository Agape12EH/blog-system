import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { Post } from "./Post.js";
import { User } from "./User.js";

class Comment extends Model {}

Comment.init(
  {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: Post,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Comment",
    underscored: true,
  }
);

export { Comment };
