const router = require('express').Router();
const postController = require("../controllers/postController");

router.get('/posts',postController.loadPostList);
router.post('/posts/write',postController.savePost);
router.patch('/posts/:id',postController.updatePost);
router.get('/posts/:id/mentioned-posts');
router.get('/posts/:id',postController.loadPost);

module.exports = router;