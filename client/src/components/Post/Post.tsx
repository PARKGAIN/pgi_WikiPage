import { useState, useEffect } from "react";
import axios from "axios";

interface MentionedPost {
  _id: string;
  title: string;
}

interface Post {
  _id: string;
  title: string;
  body: string;
}

const Post: React.FC<{ postId: string }> = ({ postId }) => {
  const [post, setPost] = useState<Post>();
  const [mentionedPosts, setMentionedPosts] = useState<MentionedPost[]>([]);

  useEffect(() => {
    // Fetch the current post
    axios.get(`/api/posts/${postId}`).then((response) => {
      setPost(response.data);
    });

    // Fetch the mentioned posts
    axios.get(`/api/posts/${postId}/mentioned-posts`).then((response) => {
      setMentionedPosts(response.data);
    });
  }, [postId]);

  function renderBody() {
    if (!post) {
      return <div>Loading...</div>;
    }

    // Loop through each mentioned post and replace the title in the body with a link
    let body = post.body;
    mentionedPosts.forEach((mentionedPost) => {
      body = body.replace(
        `[[${mentionedPost.title}]]`,
        `<a href="/posts/${mentionedPost._id}">${mentionedPost.title}</a>`
      );
    });

    return <div dangerouslySetInnerHTML={{ __html: body }} />;
  }

  return (
    <div>
      <h1>{post?.title}</h1>
      {renderBody()}
    </div>
  );
};

export default Post;
