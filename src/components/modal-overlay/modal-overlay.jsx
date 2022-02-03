import modalOverlayStyles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

ModalOverlay.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export function ModalOverlay({ onClick }) {
  return <div className={modalOverlayStyles.overlay} onClick={onClick} />;
}
