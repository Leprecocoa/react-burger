import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./order-card.module.css";
import imagePath from "../../images/bun-01.png";

export const OrderCard = () => {
  return (
    <div className={`${styles.order_card} p-6`}>
      <div className={`${styles.order_number} mb-6`}>
        <p className="text text_type_digits-default">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20 i-GMT+3
        </p>
      </div>
      <h1 className={`${styles.order_title} mb-6 text text_type_main-medium`}>
        Death Star Starship Main бургер
      </h1>
      <div className={styles.order_ingredients}>
        <div className={styles.order_ingredients_images}>
          <div className={styles.order_images_border}>
            <img
              src={imagePath}
              alt="img"
              className={styles.order_ingredient_image}
            />
          </div>
          <div className={styles.order_images_border}>
            <img
              src={imagePath}
              alt="img"
              className={styles.order_ingredient_image}
            />
          </div>
          <div className={styles.order_images_border}>
            <img
              src={imagePath}
              alt="img"
              className={styles.order_ingredient_image}
            />
          </div>
          <div className={styles.order_images_border}>
            <img
              src={imagePath}
              alt="img"
              className={styles.order_ingredient_image}
            />
          </div>
          <div className={styles.order_images_border}>
            <img
              src={imagePath}
              alt="img"
              className={styles.order_ingredient_image}
            />
          </div>
        </div>
        <div className={styles.order_price}>
          <p className="text text_type_digits-default">
            480
            <span className={`${styles.order_icon} ml-2`}>
              <CurrencyIcon type="primary" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
