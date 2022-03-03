import modalOverlayStyles from "./modal-overlay.module.css";

interface IModalOverlayProps {
  onClick: () => void;
}

export function ModalOverlay({ onClick }: IModalOverlayProps) {
  return <div className={modalOverlayStyles.overlay} onClick={onClick} />;
}
