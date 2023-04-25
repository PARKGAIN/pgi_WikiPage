import Modal from "../Modal/Modal";
import { Label } from "./styles";
import { useState } from "react";
import useAsync from "@src/hooks/useAsync";
import { loadTitles } from "@src/apis/apis";
import { savePost } from "@src/apis/apis";
interface Props {
  show: boolean;
  onCloseModal: any;
  setShowPostWriteModal: any;
}

const PostWriteModal = ({ show, onCloseModal }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [state] = useAsync(loadTitles, []);
  const { loading, data: fetchedTitles, error }: any = state;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  function wrapWithATag(content: any, fetchedTitles: string[] | undefined) {
    if (!fetchedTitles) return content;
    let wrappedContent = content;
    fetchedTitles.forEach((target) => {
      const pattern = new RegExp(
        `(?<!href=")${target.replace(/\?/g, "\\?")}(?!")`,
        "g"
      );
      wrappedContent = wrappedContent.replace(
        pattern,
        `<a href="/posts/${target}">${target}</a>`
      );
    });
    return wrappedContent;
  }

  const wrappedContent = wrapWithATag(content, fetchedTitles);

  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form onSubmit={() => savePost(title, content)}>
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
