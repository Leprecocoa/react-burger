import styles from "./order-number-feed.module.css";

export const OrderNumberFeed = ({
  readyNumbers,
  inProgressNumbers,
  doneToday,
  doneTotal,
}: {
  readyNumbers: number[];
  inProgressNumbers: number[];
  doneTotal: number;
  doneToday: number;
}) => {
  return (
    <div className={styles.order_numbers_feed}>
      <div className={styles.order_numbers}>
        <div className={styles.order_numbers_ready}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <ul className={styles.order_numbers_ready_list}>
            {readyNumbers.map((number) => (
              <li
                key={number}
                className={`${styles.order_numbers_list_item} ${styles.list_item} text text_type_digits-default`}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.order_numbers_inprogress}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <ul className={styles.order_numbers_inprogress_list}>
            {inProgressNumbers.map((number) => (
              <li
                key={number}
                className={`${styles.order_numbers_list_item} text text_type_digits-default`}
              >
                {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${styles.orders_done_alltime} mt-15`}>
        <p className="text text_type_main-medium">Выполнено за все время:</p>
        <p className={`text text_type_digits-large ${styles.text_glow}`}>
          {doneTotal}
        </p>
      </div>
      <div className={styles.orders_done_today}>
        <p className="text text_type_main-medium">Выполнено за сегодня:</p>
        <p className={`text text_type_digits-large ${styles.text_glow}`}>
          {doneToday}
        </p>
      </div>
    </div>
  );
};
