import { useLocation, Link } from "react-router-dom";
import { useWsFeed } from "../../services/hooks/useWsFeed";
import { useAppSelector } from "../../utils/types";
import { OrderStatus } from "../order-status/order-status";

export function FeedPage() {
  useWsFeed();
  const { orders, total, totalToday } = useAppSelector(
    ({ feed: { orders, total, totalToday } }) => ({ orders, total, totalToday })
  );
  let location = useLocation();
  return (
    <div>
      <h1>Лента заказов</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "50% 50%",
          gridGap: "1rem",
        }}
      >
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
        <div>
          <div>Всего</div>
          <div>{total != null ? total : "Загрузка..."}</div>
          <hr />
          <div>Всего сегодня</div>
          <div>{totalToday != null ? totalToday : "Загрузка..."}</div>
          <hr />
          <div>Готовы</div>
          <ol>
            {orders
              .filter((order) => order.status === "done")
              .slice(0, 6)
              .map((order) => (
                <li key={order._id}>{order.number}</li>
              ))}
          </ol>
          <hr />
          <div>Готовятся</div>
          <ol>
            {orders
              .filter(
                (order) =>
                  order.status === "pending" || order.status === "created"
              )
              .slice(0, 6)
              .map((order) => (
                <li key={order._id}>{order.number}</li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
