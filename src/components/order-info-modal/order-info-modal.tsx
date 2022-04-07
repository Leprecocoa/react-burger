import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Modal } from "../modal/modal";
import { OrderDetails } from "../order-details/order-details";

export function OrderInfoModal() {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();

  const handleFeedDetailsClose = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Modal isVisible={!!id} onClose={handleFeedDetailsClose}>
      <OrderDetails orderId={id} />
    </Modal>
  );
}
