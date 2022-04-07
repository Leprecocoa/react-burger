import { useLocation, Link } from "react-router-dom";
import { useWsProfileFeed } from "../../services/hooks/use-ws-profile-feed";
import { useAppSelector } from "../../utils/types";
import styles from "../feed-page/feed-page.module.css";
import { OrderCard } from "../order-card/order-card";

export function ProfileFeedPage() {
  useWsProfileFeed();
  const orders = useAppSelector(({ profileFeed }) => profileFeed.orders);
  let location = useLocation();
  return (
    <div>
      <h1>Персональная лента заказов</h1>
      <div className={styles.order_list}>
        {orders.map(({ _id }) => (
          <Link
            key={_id}
            to={{
              pathname: `/profile/orders/${_id}`,
              state: { background: location },
            }}
            className={styles.feed_item_link}
          >
            <OrderCard orderId={_id} />
          </Link>
        ))}
      </div>
    </div>
  );
}
