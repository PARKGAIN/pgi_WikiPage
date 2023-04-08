import Modal from "../Modal/Modal";
import axios from "axios";
import { Label } from "../PostWriteModal/styles";
import { useState } from "react";

const UpdateModal = ({ show, onCloseModal, postId }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const updatePost = async () => {
    try {
      await axios.patch(`http://localhost:8000/posts/${postId}`, {
        title: title,
        content: content,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={updatePost}>
        <Label>
          <span>제목</span>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Label>
        <Label>
          <span>내용</span>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </Label>
        <button>글 수정하기</button>
      </form>
    </Modal>
  );
};

export default UpdateModal;
