import { Comment } from "../models/Comment.js";

const getAll = async (req, res) => {
  const comments = await Comment.findAll();

  return res.json(comments);
};

const getOne = async (req, res) => {
  const comment = await Comment.findOne({ where: { id: req.params.id } });

  if (comment === null) {
    return res.status(404).json({ message: "Comment not found" });
  }

  return res.json(comment);
};

const create = async (req, res) => {
  // Destructuring body
  const { comment, postId, userId } = req.body;

  // validaciones

  // Metodo de Creación
  const newComment = await Comment.create({
    comment,
    postId,
    userId,
  });

  return res.json(newComment);
};

const update = async (req, res) => {
  // Destructuring body
  const { comment, postId, userId } = req.body;

  // validaciones

  // Metodo de Creación
  const updateComment = await Comment.update(
    {
      comment,
      postId,
      userId,
    },
    {
      where: { id: req.params.id },
    }
  );

  if (updateComment == false) {
    return res.json({ message: "Comment not found" });
  }

  return res.json({ message: "Comment updated successfully" });
};

const destroy = async (req, res) => {
  await Comment.destroy({
    where: {
      id: req.params.id,
    },
    force: true,
  });

  return res.json({ message: "Comment deleted successfully" });
};

export { getAll, getOne, create, destroy, update };
