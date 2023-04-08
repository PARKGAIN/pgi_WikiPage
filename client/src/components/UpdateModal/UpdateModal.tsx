import Modal from "../Modal/Modal";

const UpdateModal = ({ show, onCloseModal }: any) => {
  return (
    <Modal show={show} onCloseModal={onCloseModal}>
      <form>
        <button>글 수정하기</button>
      </form>
    </Modal>
  );
};

export default UpdateModal;
