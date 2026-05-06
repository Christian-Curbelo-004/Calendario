import { createPortal } from "react-dom";

import "./Modal.css";

export default function Modal({ children, isOpen, onClose = null }) {
  const modalRoot = document.getElementById("modal-root");

  const onClickBackrdopHandler = (event) => {
    event.preventDefault();

    if (onClose) onClose();
  };

  const onClickModalHandler = (event) => {
    event.stopPropagation();
  };

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="backdrop" onClick={onClickBackrdopHandler}>
      <div className="modal" onClick={onClickModalHandler}>
        {children}
      </div>
    </div>,
    modalRoot,
  );
}
