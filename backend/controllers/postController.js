const mongoose = require("mongoose");
const Post = require("../models/Post.js");

const AllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ _id: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const GetPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const CreatePost = async (req, res) => {
    const post = new Post({ ...req.body, createdAt: new Date().toISOString() });

    try {
        const savedPost = await post.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



module.exports = {
    AllPosts,
    GetPost,
    CreatePost,
    
};