import useAsync from "@src/hooks/useAsync";
import axios from "axios";
import { useParams } from "react-router-dom";

const WikiPagePostList = () => {
  const { id } = useParams();
  const loadOtherPost = async () => {
    const res = await axios.get(`http://localhost:8000/postlists/${id}`);
    return res.data;
  };
  const [state] = useAsync(loadOtherPost, []);
  const { loading, data: otherPost, error }: any = state;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="postlist_container">
      <h4>다른 글</h4>
      <table>
        <tbody>
          {otherPost?.map((e: any, i: number) => {
            return (
              <tr key={otherPost[i]._id}>
                <td>{otherPost[i].title}</td>
                <td>{otherPost[i].content}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WikiPagePostList;
