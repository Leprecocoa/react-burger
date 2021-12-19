import { useCallback } from "react";
import modalStyles from "./modal.module.css";

export function Modal(props) {
  const handleClick = useCallback((event) => {
    event.stopPropagation();
  }, []);
  return (
    <div onClick={handleClick} className={`${modalStyles.modal} pl-10 pr-10`}>
      {props.children}
    </div>
  );
}
