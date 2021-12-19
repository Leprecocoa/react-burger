import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { Modal } from "../modal/modal";

export function IngredientDetailsModal(props) {
  if (!props.ingredient) {
    return null;
  }
  return (
    <ModalOverlay onClick={props.onClose} onEscPress={props.onClose}>
      <Modal>
        <IngredientDetails
          ingredient={props.ingredient}
          onCloseClick={props.onClose}
        />
      </Modal>
    </ModalOverlay>
  );
}
