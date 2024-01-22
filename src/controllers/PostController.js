import { Post } from "../models/Post.js";

const getAll = async (req, res) => {
  const posts = await Post.findAll();

  return res.json(posts);
};

const getOne = async (req, res) => {
  const post = await Post.findOne({ where: { id: req.params.id } });

  if (post === null) {
    return res.status(404).json({ message: "Post not found" });
  }

  return res.json(post);
};

const create = async (req, res) => {
  // Destructuring body
  const { title, subtitle, content, userId } = req.body;

  // validaciones

  // Metodo de Creación
  const newPost = await Post.create({
    title,
    subtitle,
    content,
    userId,
  });

  return res.json(newPost);
};

const update = async (req, res) => {
  // Destructuring body
  const { title, subtitle, content, userId } = req.body;

  // validaciones

  // Metodo de Creación
  const updatePost = await Post.update(
    {
      title,
      subtitle,
      content,
      userId,
    },
    {
      where: { id: req.params.id },
    }
  );

  if (updatePost == false) {
    return res.json({ message: "post not found" });
  }

  return res.json({ message: "post updated successfully" });
};

const destroy = async (req, res) => {
  await Post.destroy({
    where: {
      id: req.params.id,
    },
    force: true,
  });

  return res.json({ message: "Post deleted successfully" });
};

export { getAll, getOne, create, destroy, update };
