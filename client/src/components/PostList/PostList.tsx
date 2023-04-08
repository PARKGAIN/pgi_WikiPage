export {};

// interface MentionedPost {
//   _id: string;
//   title: string;
// }

// interface Post {
//   _id: string;
//   title: string;
//   body: string;
// }

// const Post: React.FC<{ postId: string }> = ({ postId }) => {
//   const [post, setPost] = useState<Post>();
//   const [mentionedPosts, setMentionedPosts] = useState<MentionedPost[]>([]);

//   useEffect(() => {
//     // Fetch the current post
//     axios.get(`/api/posts/${postId}`).then((response) => {
//       setPost(response.data);
//     });

//     // Fetch the mentioned posts
//     axios.get(`/api/posts/${postId}/mentioned-posts`).then((response) => {
//       setMentionedPosts(response.data);
//     });
//   }, [postId]);

//   // Loop through each mentioned post and replace the title in the body with a link
//   //mentionedPosts.forEach((mentionedPost) => {
//   // body = body.replace(
//   //  `[[${mentionedPost.title}]]`,
//   //  `<a href="/posts/${mentionedPost._id}">${mentionedPost.title}</a>`
//   //    );
//   //  });

//   return (
//     // <div>
//     {
//       /* <h1>{post?.title}</h1> */
//     }
//     //  </div>
//   );
// };

// export default Post;
