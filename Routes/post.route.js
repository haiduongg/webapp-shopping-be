const router = require('express').Router();

const postController = require('../Controllers/post.controller');

router.get("/", postController.getAllPost);

router.get("/:id", postController.getOnePost);

router.post("/create", postController.createNewPost)

router.delete("/:id", postController.deletePost)

module.exports = router;