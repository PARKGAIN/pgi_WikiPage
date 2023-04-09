import axios from "axios";
import Modal from "../Modal/Modal";
import { Label } from "./styles";
import { useState } from "react";
import useAsync from "@src/hooks/useAsync";
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

  const loadTitles = async () => {
    try {
      const res = await axios.get("http://localhost:8000/posts/title");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const [state] = useAsync(loadTitles, []);
  const { loading, data: fetchedTitles, error }: any = state;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

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

  function wrapWithATag(content: any, fetchedTitles: string[]) {
    let wrappedContent = content;
    fetchedTitles &&
      fetchedTitles.forEach((target) => {
        const pattern = new RegExp(target.replace(/\?/g, "\\?"), "g");
        wrappedContent = wrappedContent.replace(pattern, `<a>${target}</a>`);
      });
    return wrappedContent;
  }
  const wrappedContent = wrapWithATag(content, fetchedTitles);
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
            value={wrappedContent}
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
