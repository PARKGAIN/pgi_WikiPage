import Header from "@src/components/Header/Header";
import { useParams } from "react-router-dom";
import useAsync from "@src/hooks/useAsync";
import { useCallback, useState } from "react";
import UpdateModal from "@src/components/UpdateModal/UpdateModal";
import WikiPagePostList from "@src/components/WikiPagePostList/WikiPagePostList";
import axios from "axios";

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
  if (!post) return <p>Loading...</p>;
  return (
    <div className="page_container">
      <Header />
      <button className="float_right" onClick={onClickUpdatePost}>
        수정
      </button>
      <div style={{ width: "760px", margin: "0px auto" }}>
        {post?.map((e: any, i: number) => {
          return (
            <div key={e}>
              <h2>{post[i].title}</h2>
              <hr />
              <div
                dangerouslySetInnerHTML={{
                  __html: `${post[i].content}`,
                }}
                style={{ minHeight: "300px" }}
              />
            </div>
          );
        })}
      </div>
      <WikiPagePostList />
      <UpdateModal
        show={showUpdateModal}
        post={post}
        onCloseModal={onCloseModal}
        setShowPostWriteModal={setShowUpdateModal}
        postId={id}
      />
    </div>
  );
};

export default WikiPage;
