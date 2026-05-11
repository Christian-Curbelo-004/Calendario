import { createPortal } from "react-dom";

import "./Modal.css";
import { useEffect, useMemo } from "react";

export default function Modal({ children, isOpen, onClose = null }) {
  const modalRoot = useMemo(() => document.getElementById("modal-root"), []);
  const body = useMemo(() => document.body, []);

  const onClickBackrdopHandler = (event) => {
    event.preventDefault();

    if (onClose) onClose();
  };

  const onClickModalHandler = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [isOpen, body]);

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
