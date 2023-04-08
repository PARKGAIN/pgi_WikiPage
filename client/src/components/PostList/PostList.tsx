import axios from "axios";
import useAsync from "@src/hooks/useAsync";

const PostList = ({ pageNumber }: any) => {
  const loadPost = async () => {
    const res = await axios.get(
      `http://localhost:8000/posts?page=${pageNumber}&size=${5}`
    );
    return res.data;
  };
  const [state] = useAsync(loadPost, []);
  const { loading, data: postlist, error }: any = state;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      {postlist?.map((e: any, i: number) => {
        return <div key={e}>{postlist[i].title}</div>;
      })}
    </div>
  );
};

export default PostList;
