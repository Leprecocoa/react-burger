import { useLocation, Link, NavLink, useHistory } from "react-router-dom";
import { logoutUser } from "../../services/actions/user-actions";
import { useWsProfileFeed } from "../../services/hooks/use-ws-profile-feed";
import { useAppDispatch, useAppSelector } from "../../utils/types";
import styles from "../feed-page/feed-page.module.css";
import { OrderCard } from "../order-card/order-card";

export function ProfileFeedPage() {
  useWsProfileFeed();
  const orders = useAppSelector(({ profileFeed }) => profileFeed.orders);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <div className={`${styles.main} pt-20`}>
      <nav className={`${styles.nav} mr-15`}>
        <NavLink
          to="/profile"
          className={`${styles.navlink} text text_type_main-medium text_color_inactive mb-6`}
        >
          Профиль
        </NavLink>
        <NavLink
          to="/profile/orders"
          className={`${styles.navlink} text text_type_main-medium text_color_inactive mb-6`}
          activeClassName={styles.active_link}
        >
          История заказов
        </NavLink>
        <button
          className={`${styles.logout} text text_type_main-medium text_color_inactive mb-6`}
          onClick={() => {
            dispatch(logoutUser(history));
          }}
        >
          Выход
        </button>
      </nav>
      <div className={`${styles.profile_order_list}`}>
        <div className={`${styles.order_list} ${styles.scrollbar}`}>
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
    </div>
  );
}
