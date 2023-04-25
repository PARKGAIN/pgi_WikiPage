import useAsync from "@src/hooks/useAsync";
import { loadOtherPost } from "@src/apis/apis";
import { useParams } from "react-router-dom";

const WikiPagePostList = () => {
  const { id } = useParams();
  const [state] = useAsync(() => loadOtherPost(id), []);
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
                <td
                  dangerouslySetInnerHTML={{
                    __html: `${otherPost[i].content}`,
                  }}
                />
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WikiPagePostList;
