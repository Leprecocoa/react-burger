import { useEffect } from "react";
import closeIcon from "../../images/close.svg";
import modalStyles from "./modal.module.css";
import { createPortal } from "react-dom";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

export function Modal({ children, title, onClose, isVisible }) {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onClose]);

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
            <img src={closeIcon} alt="close" />
          </button>
        </div>
        {children}
      </div>
    </>,
    document.querySelector("body")
  );
}
