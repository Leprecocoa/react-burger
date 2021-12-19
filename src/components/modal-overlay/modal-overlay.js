import { useEffect } from "react";
import { createPortal } from "react-dom";
import modalOverlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
  onEscPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export function ModalOverlay({ onEscPress, onClick, children }) {
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
    <div className={modalOverlayStyles.modal_overlay} onClick={onClick}>
      {children}
    </div>,
    document.querySelector("body")
  );
}
