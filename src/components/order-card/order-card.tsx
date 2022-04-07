import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.css";
import { useOrderData } from "../../services/hooks/use-order-data";
import { formatOrderDate } from "../../utils/format-order-date";

export const OrderCard = ({ orderId }: { orderId: string }) => {
  const { order, orderTotal, orderIngredientsSlice, orderIngredientsRest } =
    useOrderData(orderId);

  if (!order) {
    return null;
  }

  return (
    <div className={`${styles.order_card} p-6`}>
      <div className={`${styles.order_number} mb-6`}>
        <p className="text text_type_digits-default">#{order.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {formatOrderDate(order.createdAt)}
        </p>
      </div>
      <h1 className={`${styles.order_title} mb-6 text text_type_main-medium`}>
        {order.name}
      </h1>
      <div className={styles.order_ingredients}>
        <div className={styles.order_ingredients_images}>
          {orderIngredientsSlice.map((orderIngredient, index) => (
            <div
              key={`${orderIngredient._id}${index}`}
              className={styles.order_images_border}
            >
              <img
                src={orderIngredient.image_mobile}
                alt="img"
                className={styles.order_ingredient_image}
              />
            </div>
          ))}
          {orderIngredientsRest.length > 0 ? (
            <div className={styles.order_images_border}>
              <img
                src={orderIngredientsRest[0].image_large}
                alt="img"
                className={styles.order_ingredient_image}
              />
              <div className={styles.order_ingredient_count}>
                +{orderIngredientsRest.length}
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.order_price}>
          <p className="text text_type_digits-default">
            {orderTotal}
            <span className={`${styles.order_icon} ml-2`}>
              <CurrencyIcon type="primary" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
