import { Router } from "express";
import {
  getAll,
  getOne,
  create,
  destroy,
  update,
} from "../controllers/PostController.js";
const router = Router();

router
  .get("/", getAll)
  .get("/:id", getOne)
  .post("/", create)
  .put("/:id", update)
  .delete("/:id", destroy);

export default router;
