// Path: posts/controller/post.js
const postModel = require("../model/post");

exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const author = req.user._id; // Assuming you store user ID in req.user after token verification

    try {
        const newPost = await postModel.create({ title, content, author });
        res.status(201).json(newPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getPosts = async (req, res) => {
    try {
        const posts = await postModel.find().populate("author", "userName");
        res.status(200).json(posts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getPostById = async (req, res) => {
    const postId = req.params.id;

    try {
        const post = await postModel.findById(postId).populate("author", "userName");
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.updatePost = async (req, res) => {
    const postId = req.params.id;
    const { title, content } = req.body;

    try {
        const updatedPost = await postModel.findByIdAndUpdate(
            postId,
            { title, content },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.deletePost = async (req, res) => {
    const postId = req.params.id;

    try {
        const deletedPost = await postModel.findByIdAndDelete(postId);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};
