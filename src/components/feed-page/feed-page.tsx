import { useLocation, Link } from "react-router-dom";
import { useWsFeed } from "../../services/hooks/useWsFeed";
import { useAppSelector } from "../../utils/types";
import { OrderStatus } from "../order-status/order-status";

export function FeedPage() {
  useWsFeed();
  const orders = useAppSelector(({ feed }) => feed.orders);
  let location = useLocation();
  return (
    <div>
      <h1>Лента заказов</h1>
      <div>
        {orders.map(({ _id, name, number, status }) => (
          <Link
            key={_id}
            to={{ pathname: `/feed/${_id}`, state: { background: location } }}
          >
            <div
              style={{
                border: "1px solid white",
                background: "black",
                padding: "1rem",
                borderRadius: "5px",
                marginBottom: "1rem",
              }}
            >
              <div>
                #{number} - {name}
              </div>
              <OrderStatus status={status} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
