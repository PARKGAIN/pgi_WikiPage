import useAsync from "@src/hooks/useAsync";
import { PostContainer, PostListItem } from "./styles";
import { Link } from "react-router-dom";
import axios from "axios";

const PostList = ({ pageNumber }: any) => {
  const loadPostList = async () => {
    const res = await axios.get(
      `http://localhost:8000/posts?pageNumber=${pageNumber}&pageSize=${5}`
    );
    return res.data;
  };
  const [state] = useAsync(loadPostList, [pageNumber]);
  const { loading, data: postlist, error }: any = state;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <PostContainer>
      {postlist?.map((e: any, i: number) => {
        return (
          <Link key={postlist[i]._id} to={`/${postlist[i].postId}`}>
            <PostListItem>{postlist[i].title}</PostListItem>
          </Link>
        );
      })}
    </PostContainer>
  );
};

export default PostList;
