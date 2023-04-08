const router = require('express').Router();
const postController = require("../controllers/postController");

router.get('/posts',postController.loadPostList);
router.post('/posts/write',postController.savePost);
router.patch('/posts/:id',postController.updatePost);

// GET API to fetch the titles and IDs of other posts mentioned in the current post
router.get('/posts/:id/mentioned-posts', async (req, res) => {
  const postId = req.params.id;

  // Fetch the current post from the database
  const currentPost = await Post.findById(postId);

  // Extract the titles of the mentioned posts from the current post's body
  const mentionedPostTitles = extractMentionedPostTitles(currentPost.body);

  // Find the IDs of the mentioned posts from the database
  const mentionedPosts = await Post.find({ title: { $in: mentionedPostTitles } }, '_id title');

  // Return the IDs and titles of the mentioned posts
  res.json(mentionedPosts);
});

// Function to extract the titles of the mentioned posts from the post body
function extractMentionedPostTitles(body) {
  const regex = /(?<=\[\[).+?(?=\]\])/g;
  const matches = body.match(regex);
  if (!matches) {
    return [];
  }
  return matches;
}

router.get('/posts/:id',postController.loadPost);

module.exports = router;