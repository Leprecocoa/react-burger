import orderDetailsStyles from "./order-details.module.css";
import checkIcon from "../../images/check.svg";
import { ModalCloseButton } from "../modal-close-button/modal-close-button";

export function OrderDetails(props) {
  return (
    <div className={`${orderDetailsStyles.details} pt-15 pb-30`}>
      <div className={orderDetailsStyles.header}>
        <ModalCloseButton onClick={props.onCloseClick} />
      </div>
      <p className={`${orderDetailsStyles.digits} text text_type_digits-large mb-8`}>034536</p>
      <p className="text text_type_main-medium">идентификатор заказа</p>
      <img
        className={`${orderDetailsStyles.checkmark} mt-15 mb-15`}
        src={checkIcon}
        alt="order-details"
      />
      <p className="text text_type_main-default mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive">Дождитесь готовности на орбитальной станции</p>
    </div>
  );
}
