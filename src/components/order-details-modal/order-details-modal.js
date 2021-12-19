import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";
import PropTypes from "prop-types";

OrderDetailsModal.propTypes = {
  order: PropTypes.object,
  onClose: PropTypes.func.isRequired,
};

export function OrderDetailsModal({ order, onClose }) {
  if (!order) {
    return null;
  }
  return (
    <ModalOverlay onClick={onClose} onEscPress={onClose}>
      <Modal>
        <OrderDetails order={order} onCloseClick={onClose} />
      </Modal>
    </ModalOverlay>
  );
}
