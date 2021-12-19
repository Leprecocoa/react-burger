import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { Modal } from "../modal/modal";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

IngredientDetailsModal.propTypes = {
  ingredient: ingredientType,
  onClose: PropTypes.func.isRequired,
};

export function IngredientDetailsModal({ ingredient, onClose }) {
  if (!ingredient) {
    return null;
  }
  return (
    <ModalOverlay onClick={onClose} onEscPress={onClose}>
      <Modal>
        <IngredientDetails ingredient={ingredient} onCloseClick={onClose} />
      </Modal>
    </ModalOverlay>
  );
}
