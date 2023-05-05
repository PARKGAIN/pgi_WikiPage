import useAsync from "@src/hooks/useAsync";
import { PostContainer, PostListItem } from "./styles";
import { Link } from "react-router-dom";
import { loadPostList } from "@src/apis/apis";

const PostList = ({ pageNumber }: any): JSX.Element => {
  const [state] = useAsync(() => loadPostList(pageNumber), [pageNumber]);
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
