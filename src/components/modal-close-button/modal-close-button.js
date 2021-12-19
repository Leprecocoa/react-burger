import modalCloseButtonStyles from "./modal-close-button.module.css";
import closeIcon from "../../images/close.svg";

export function ModalCloseButton(props) {
  return (
    <button className={modalCloseButtonStyles.button} onClick={props.onClick}>
      <img src={closeIcon} alt="close" />
    </button>
  );
}
