import Header from "@src/components/Header/Header";
import PostList from "@src/components/PostList/PostList";
import PostWriteModal from "@src/components/PostWriteModal/PostWriteModal";
import { useState, useCallback } from "react";

const MainPage = () => {
  const [showPostWriteModal, setShowPostWriteModal] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const onClickWritePost = useCallback(() => {
    setShowPostWriteModal(true);
  }, []);
  const onCloseModal = useCallback(() => {
    setShowPostWriteModal(false);
  }, []);
  const goPrevPage = () => {
    setPageNumber(pageNumber - 1);
  };
  const goNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <div className="page_container">
      <Header />
      <button onClick={onClickWritePost}>추가</button>
      <PostList pageNumber={pageNumber} />
      <div className="pagination_center">
        <button onClick={goPrevPage}>이전</button>
        <span>{pageNumber}</span>
        <button onClick={goNextPage}>다음</button>
      </div>
      <PostWriteModal
        show={showPostWriteModal}
        onCloseModal={onCloseModal}
        setShowPostWriteModal={setShowPostWriteModal}
      />
    </div>
  );
};

export default MainPage;
