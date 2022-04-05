import styles from "./order-number-feed.module.css";

export const OrderNumberFeed = () => {
  return (
    <div className={styles.order_numbers_feed}>
      <div className={styles.order_numbers}>
        <div className={styles.order_numbers_ready}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.order_numbers_ready_list}>
            <li
              className={`${styles.order_numbers_list_item} ${styles.list_item} text text_type_digits-default`}
            >
              034533
            </li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
          </ul>
        </div>
        <div className={styles.order_numbers_inprogress}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.order_numbers_inprogress_list}>
            <li
              className={`${styles.order_numbers_list_item} text text_type_digits-default`}
            >
              034533
            </li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
            <li className={styles.order_numbers_list_item}>034533</li>
          </ul>
        </div>
      </div>
      <div className={`${styles.orders_done_alltime} mt-15`}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className="text text_type_digits-large">28 752</p>
      </div>
      <div className={styles.orders_done_today}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className="text text_type_digits-large">138</p>
      </div>
    </div>
  );
};
