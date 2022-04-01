import { useLocation, Link } from "react-router-dom";
import { useWsProfileFeed } from "../../services/hooks/useWsProfileFeed";
import { useAppSelector } from "../../utils/types";
import { OrderStatus } from "../order-status/order-status";

export function ProfileFeedPage() {
  useWsProfileFeed();
  const orders = useAppSelector(({ profileFeed }) => profileFeed.orders);
  let location = useLocation();
  return (
    <div>
      <h1>Персональная лента заказов</h1>
      <div>
        {orders.map(({ _id, name, number, status }) => (
          <Link
            key={_id}
            to={{
              pathname: `/profile/orders/${_id}`,
              state: { background: location },
            }}
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
