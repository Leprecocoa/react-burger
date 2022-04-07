import styles from "./order-details.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { formatOrderDate } from "../../utils/format-order-date";
import { formatOrderStatus } from "../../utils/format-order-status";
import { useOrderData } from "../../services/hooks/use-order-data";

export const OrderDetails = ({ orderId }: { orderId: string }) => {
  const { order, orderIngredients, orderIngredientCounts, orderTotal } =
    useOrderData(orderId);

  if (!order) {
    return null;
  }

  return (
    <div className={`${styles.order_details} pb-6 pt-6`}>
      <div className={styles.order_info}>
        <div className={`${styles.order_number} mb-10`}>
          <p className="text text_type_digits-default">#{order.number}</p>
        </div>
        <div className={`mb-15`}>
          <h1
            className={`${styles.order_title} text text_type_main-medium mb-3`}
          >
            {order.name}
          </h1>
          <p
            className={`${
              order.status === "done"
                ? styles.order_status_done
                : styles.order_status_in_progress
            } text text_type_main-default`}
          >
            {formatOrderStatus(order.status)}
          </p>
        </div>
        <div className={`${styles.order_ingredients} pr-4`}>
          <p className="text text_type_main-medium mb-6">Состав:</p>
          <ul className={styles.order_ingredients_list}>
            {orderIngredients.map((ingredient) => (
              <li className={`${styles.order_ingredients_listitem} mb-4`}>
                <div className={styles.ingredient_details}>
                  <img src={ingredient.image_mobile} alt="Img" />
                  <p
                    className={`${styles.ingredient_title} text text_type_main-default ml-4`}
                  >
                    {ingredient.name}
                  </p>
                </div>
                <div className={styles.ingredient_cost}>
                  <p className="text text_type_digits-default mr-2 ml-4">
                    <span>{orderIngredientCounts[ingredient._id]}</span> x{" "}
                    <span>{ingredient.price}</span>
                  </p>
                  <CurrencyIcon type="primary" />
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.order_date}>
          <p className="text text_type_main-default text_color_inactive">
            {formatOrderDate(order.createdAt)}
          </p>
          <div className={styles.order_sum}>
            <p className="text text_type_digits-default mr-2">{orderTotal}</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
