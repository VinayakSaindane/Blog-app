const express = require('express');
const BlogRouter = express.Router();
const { AllPosts, GetPost, CreatePost, UpdatePost, DeletePost} = require('../controllers/postController.js');

BlogRouter.get('/', AllPosts);
BlogRouter.get('/:id', GetPost);
BlogRouter.post('/', CreatePost);

module.exports = BlogRouter;