import { useCallback } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAppSelector } from "../../utils/types";
import { Modal } from "../modal/modal";
import { OrderInfo } from "../order-info/order-info";

export function FeedDetailsModal() {
  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const { order, isLoading, isError } = useAppSelector(
    ({
      feed: { orders, isLoading, isError },
    }) => ({ order: orders.find(order => order._id === id), isLoading, isError })
  );
  const handleFeedDetailsClose = useCallback(() => {
    history.goBack();
  }, [history]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (isError) {
    return <div>Ошибка :(</div>;
  }

  if (!order) {
    return <div>Заказ не найден</div>;
  }

  return (
    <Modal isVisible={!!order} onClose={handleFeedDetailsClose}>
      <OrderInfo order={order} />
    </Modal>
  );
}
