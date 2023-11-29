// Path: posts/model/post.js
const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "user", // Reference to the User model
        required: true,
    },
});

module.exports = mongoose.model("post", postSchema);
