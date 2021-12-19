import { useEffect } from "react";
import modalStyles from "./modal.module.css";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export function Modal({ children, title, onClose, isVisible }) {
  useEffect(() => {
    if (!isVisible) {
      return;
    }
    const listener = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onClose, isVisible]);

  if (!isVisible) {
    return null;
  }

  return createPortal(
    <>
      <ModalOverlay onClick={onClose} />
      <div className={`${modalStyles.modal} pr-10 pl-10 pt-10`}>
        <div className={modalStyles.header}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={modalStyles.close} onClick={onClose}>
            <CloseIcon type="primary" />
          </button>
        </div>
        {children}
      </div>
    </>,
    document.querySelector("#modals")
  );
}
