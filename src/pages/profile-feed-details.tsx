import { useParams } from "react-router-dom";
import { OrderStatus } from "../components/order-status/order-status";
import { useWsProfileFeed } from "../services/hooks/useWsProfileFeed";
import { useAppSelector } from "../utils/types";

export function ProfileFeedDetails() {
  useWsProfileFeed();
  const { id } = useParams<{ id: string }>();
  const { isLoading, isError, order } = useAppSelector(
    ({ profileFeed: { orders, isLoading, isError } }) => ({
      order: orders.find((order) => order._id === id),
      isLoading,
      isError,
    })
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
  const { number, name, status, ingredients } = order;
  return (
    <div>
      <div>#{number}</div>
      <div>{name}</div>
      <OrderStatus status={status} />
      <ol>
        {ingredients.map((id) => (
          <li>{id}</li>
        ))}
      </ol>
    </div>
  );
}
