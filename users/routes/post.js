// Path: posts/routes/post.js
const express = require("express");
const router = express.Router();
const {
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
} = require("../controller/post");
const { verifyToken } = require("../middleware/auth");

router.use(verifyToken);

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPostById);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

module.exports = router;
