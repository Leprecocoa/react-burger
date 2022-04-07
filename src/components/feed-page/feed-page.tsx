import { useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { useWsFeed } from "../../services/hooks/use-ws-feed";
import { useAppSelector } from "../../utils/types";
import { OrderCard } from "../order-card/order-card";
import { OrderNumberFeed } from "../order-number-feed/order-number-feed";
import styles from "./feed-page.module.css";

export function FeedPage() {
  useWsFeed();

  const { orders, total, totalToday } = useAppSelector(
    ({ feed: { orders, total, totalToday } }) => ({ orders, total, totalToday })
  );

  let location = useLocation();

  const readyNumbers = useMemo(
    () =>
      orders
        .filter((order) => order.status === "done")
        .slice(0, 6)
        .map((order) => order.number),
    [orders]
  );

  const inProgressNumbers = useMemo(
    () =>
      orders
        .filter((order) => order.status !== "done")
        .slice(0, 6)
        .map((order) => order.number),
    [orders]
  );

  return (
    <div>
      <h1>Лента заказов</h1>
      <div className={styles.feed_page_grid}>
        <div className={styles.order_list}>
          {orders.map(({ _id }) => (
            <Link
              key={_id}
              to={{ pathname: `/feed/${_id}`, state: { background: location } }}
              className={styles.feed_item_link}
            >
              <OrderCard orderId={_id} />
            </Link>
          ))}
        </div>
        <OrderNumberFeed
          doneToday={totalToday || 0}
          doneTotal={total || 0}
          readyNumbers={readyNumbers}
          inProgressNumbers={inProgressNumbers}
        />
      </div>
    </div>
  );
}
