import axios from "axios";
import Modal from "../Modal/Modal";
import { Label } from "./styles";
import { useState } from "react";
interface Props {
  show: boolean;
  onCloseModal: any;
  setShowPostWriteModal: any;
}

const PostWriteModal = ({
  show,
  setShowPostWriteModal,
  onCloseModal,
}: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const savePost = async () => {
    try {
      await axios.post("http://localhost:8000/posts/write", {
        title: title,
        content: content,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={savePost}>
        <Label>
          <span>제목</span>
          <input
            className="width_699"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Label>
        <Label>
          <span>내용</span>
          <textarea
            rows={20}
            cols={95}
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </Label>
        <button>글 작성하기</button>
      </form>
    </Modal>
  );
};

export default PostWriteModal;
