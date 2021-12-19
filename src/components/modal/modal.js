import { createPortal } from "react-dom";
import modalStyles from "./modal.module.css";
import closeIcon from "../../images/close.svg";

export function Modal(props) {
  return createPortal(
    <div className={`${modalStyles.modal} p-10 pb-15`}>
      <div className={modalStyles.modal_header}>
        <h2 className="text text_type_main-large">{props.title}</h2>
        <button className={modalStyles.modal_close} onClick={props.onCloseClick}>
          <img src={closeIcon} alt="close" />
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
}
