import { ReactNode, useCallback } from "react";
import { CreateModal, CloseModalButton } from "./styles";

interface Props {
  show: boolean;
  onCloseModal: () => void;
  children: ReactNode;
}
const Modal = ({ show, children, onCloseModal }: Props) => {
  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal} />
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
