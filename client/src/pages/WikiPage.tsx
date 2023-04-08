import Header from "@src/components/Header/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAsync from "@src/hooks/useAsync";
import { useCallback, useState } from "react";
import UpdateModal from "@src/components/UpdateModal/UpdateModal";

const WikiPage = () => {
  const { id } = useParams();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const onClickUpdatePost = useCallback(() => {
    setShowUpdateModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowUpdateModal(false);
  }, []);
  const loadPost = async () => {
    const res = await axios.get(`http://localhost:8000/posts/${id}`);
    return res.data;
  };
  const [state] = useAsync(loadPost, []);
  const { loading, data: post, error }: any = state;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="page_container">
      <Header />
      <div style={{ width: "760px", margin: "0px auto" }}>
        {post?.map((e: any, i: number) => {
          return (
            <div key={e}>
              <h1>{post[i].title}</h1>
              <hr />
              <div>{post[i].content}</div>
            </div>
          );
        })}
      </div>
      <button onClick={onClickUpdatePost}>수정</button>
      <UpdateModal
        show={showUpdateModal}
        onCloseModal={onCloseModal}
        setShowPostWriteModal={setShowUpdateModal}
        postId={id}
      />
    </div>
  );
};

export default WikiPage;
