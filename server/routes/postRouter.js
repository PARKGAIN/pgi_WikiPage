const router = require('express').Router();
const postController = require("../controllers/postController");

router.get('/posts',postController.loadPostList);
router.post('/posts/write',postController.savePost);
router.patch('/posts/:id',postController.updatePost);
router.get('/posts/title',postController.loadTitles);
router.get('/posts/:id',postController.loadPost);
router.get('/postlists/:id',postController.loadOtherPost);

module.exports = router;