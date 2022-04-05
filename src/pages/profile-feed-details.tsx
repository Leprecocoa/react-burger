import { useParams } from "react-router-dom";
import { OrderInfo } from "../components/order-info/order-info";
import { useWsProfileFeed } from "../services/hooks/useWsProfileFeed";
import { useAppSelector } from "../utils/types";

export function ProfileFeedDetails() {
  useWsProfileFeed();
  const { id } = useParams<{ id: string }>();
  const { order, isLoading, isError } = useAppSelector(
    ({
      profileFeed: { orders, isLoading, isError },
    }) => ({ order: orders.find(order => order._id === id), isLoading, isError })
  );
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
    <OrderInfo order={order} />
  );
}
