import modalCloseButtonStyles from "./modal-close-button.module.css";
import closeIcon from "../../images/close.svg";
import PropTypes from "prop-types";

ModalCloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export function ModalCloseButton({ onClick }) {
  return (
    <button className={modalCloseButtonStyles.button} onClick={onClick}>
      <img src={closeIcon} alt="close" />
    </button>
  );
}
