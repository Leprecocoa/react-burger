import { useEffect } from "react";
import { createPortal } from "react-dom";
import modalOverlayStyles from "./modal-overlay.module.css";

export function ModalOverlay({ onEscPress, onClick }) {
  useEffect(() => {
    const listener = (event) => {
      if (event.key === "Escape") {
        onEscPress();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [onEscPress]);
  return createPortal(
    <div className={modalOverlayStyles.modal_overlay} onClick={onClick} />,
    document.querySelector("body")
  );
}
