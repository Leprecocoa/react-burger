import styles from "./order-details.module.css";
import imagePath from "../../images/bun-01.png";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderDetails = () => {
  return (
    <div className={`${styles.order_details} pb-6 pt-6`}>
      <div className={styles.order_info}>
        <div className={`${styles.order_number} mb-10`}>
          <p className="text text_type_digits-default">#034533</p>
        </div>
        <div className={`mb-15`}>
          <h1
            className={`${styles.order_title} text text_type_main-medium mb-3`}
          >
            Black Hole Singularity острый бургер
          </h1>
          <p
            className={`${styles.order_status_done} text text_type_main-default`}
          >
            Выполнен
          </p>
        </div>
        <div className={`${styles.order_ingredients} pr-4`}>
          <p className="text text_type_main-medium mb-6">Состав:</p>
          <ul className={styles.order_ingredients_list}>
            <li className={`${styles.order_ingredients_listitem} mb-4`}>
              <div className={styles.ingredient_details}>
                <img src={imagePath} alt="Img" />
                <p
                  className={`${styles.ingredient_title} text text_type_main-default ml-4`}
                >
                  Флюоресцентная булка R2-D3
                </p>
              </div>
              <div className={styles.ingredient_cost}>
                <p className="text text_type_digits-default mr-2 ml-4">
                  <span>1</span> x <span>200</span>
                </p>
                <CurrencyIcon type="primary" />
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.order_date}>
          <p className="text text_type_main-default text_color_inactive">
            Вчера, 13:50 i-GMT+3
          </p>
          <div className={styles.order_sum}>
            <p className="text text_type_digits-default mr-2">510</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
