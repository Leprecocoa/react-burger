import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  format,
  isToday,
  isYesterday,
  formatDistanceToNowStrict,
} from "date-fns";
import { ru } from "date-fns/locale";
import styles from "./order-card.module.css";
import imagePath from "../../images/bun-01.png";
import { useOrderData } from "../../services/hooks/use-order-data";

export const OrderCard = ({ orderId }: { orderId: string }) => {
  const {
    order,
    orderIngredients,
    counts,
    total,
    sliceOfIngredients,
    restOfIngredients,
  } = useOrderData(orderId);

  if (!order) {
    return null;
  }

  const orderDate = new Date(order.createdAt);
  return (
    <div className={`${styles.order_card} p-6`}>
      <div className={`${styles.order_number} mb-6`}>
        <p className="text text_type_digits-default">#{order.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {isToday(orderDate)
            ? "Сегодня, "
            : isYesterday(orderDate)
            ? "Вчера, "
            : formatDistanceToNowStrict(orderDate, {
                locale: ru,
                addSuffix: true,
              })}
          {format(orderDate, "HH:mm 'i-'O")}
        </p>
      </div>
      <h1 className={`${styles.order_title} mb-6 text text_type_main-medium`}>
        {order.name}
      </h1>
      <div className={styles.order_ingredients}>
        <div className={styles.order_ingredients_images}>
          {sliceOfIngredients.map((orderIngredient, index) => (
            <div key={`${orderIngredient._id}${index}`} className={styles.order_images_border}>
              <img
                src={orderIngredient.image_large}
                alt="img"
                className={styles.order_ingredient_image}
              />
            </div>
          ))}
          {restOfIngredients.length > 0 ? (
            <div className={styles.order_images_border}>
              <img
                src={restOfIngredients[0].image_large}
                alt="img"
                className={styles.order_ingredient_image}
              />
              <div className={styles.order_ingredient_count}>
                +{restOfIngredients.length}
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.order_price}>
          <p className="text text_type_digits-default">
            {total}
            <span className={`${styles.order_icon} ml-2`}>
              <CurrencyIcon type="primary" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
