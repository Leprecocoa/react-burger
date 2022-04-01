import { TOrder } from "../../utils/types";
import { OrderStatus } from "../order-status/order-status";

export function OrderInfo({ order }: { order: TOrder }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div>{order.number}</div>
      <div>{order.name}</div>
      <div>
        <OrderStatus status={order.status} />
      </div>
      <ol>
        {order.ingredients.map((id, index) => (
          <li key={`${id}${index}`}>{id}</li>
        ))}
      </ol>
    </div>
  );
}
