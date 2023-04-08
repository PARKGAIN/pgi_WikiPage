import { useCallback } from "react";
import { CreateModal, CloseModalButton } from "./styles";

interface Props {
  show: boolean;
  onCloseModal: () => void;
  children: any;
}
const Modal = ({ show, children, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: any) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
