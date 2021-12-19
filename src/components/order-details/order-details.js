import orderDetailsStyles from "./order-details.module.css";
import checkIcon from "../../images/check.svg";
import PropTypes from "prop-types";
import { Modal } from "../modal/modal";

OrderDetails.propTypes = {
  order: PropTypes.any,
  onCloseClick: PropTypes.func.isRequired,
};

export function OrderDetails({ onClose, order }) {
  return (
    <Modal isVisible={!!order} onClose={onClose}>
      <div className={`${orderDetailsStyles.details} pb-30`}>
        <p
          className={`${orderDetailsStyles.digits} text text_type_digits-large mb-8`}
        >
          034536
        </p>
        <p className="text text_type_main-medium">идентификатор заказа</p>
        <img
          className={`${orderDetailsStyles.checkmark} mt-15 mb-15`}
          src={checkIcon}
          alt="order-details"
        />
        <p className="text text_type_main-default mb-2">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-default text_color_inactive">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
}
