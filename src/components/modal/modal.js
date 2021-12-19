import { useCallback } from "react";
import modalStyles from "./modal.module.css";
import PropTypes from "prop-types";

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export function Modal({ children }) {
  const handleClick = useCallback((event) => {
    event.stopPropagation();
  }, []);
  return (
    <div onClick={handleClick} className={`${modalStyles.modal} pl-10 pr-10`}>
      {children}
    </div>
  );
}
