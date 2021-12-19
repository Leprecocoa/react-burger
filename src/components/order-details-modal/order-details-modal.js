import { ModalOverlay } from "../modal-overlay/modal-overlay";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";

export function OrderDetailsModal(props) {
  if (!props.order) {
    return null;
  }
  return (
    <ModalOverlay onClick={props.onClose} onEscPress={props.onClose}>
      <Modal>
        <OrderDetails order={props.order} onCloseClick={props.onClose} />
      </Modal>
    </ModalOverlay>
  );
}
