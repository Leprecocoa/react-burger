import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { BurgerContext } from "../../utils/burger-context";
import burgerConstructorStyles from "./burger-constructor.module.css";

BurgerConstructor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

function BurgerConstructor({ onSubmit }) {
  const ingredients = useContext(BurgerContext);

  const bun = useMemo(
    () => ingredients.find((ingredient) => ingredient.type === "bun"),
    [ingredients]
  );

  const selectedIngredients = useMemo(
    () => ingredients.filter((ingredient) => ingredient.type !== "bun"),
    [ingredients]
  );

  const orderSum = useMemo(() => {
    if (!bun) {
      return null;
    }
    const sum = selectedIngredients.reduce((acc, current) => {
      return acc + current.price;
    }, 0);
    return sum + bun.price * 2;
  }, [bun, selectedIngredients]);

  const handleSubmit = useCallback(() => {
    onSubmit(
      selectedIngredients
        .map((ingredient) => ingredient._id)
        .concat([bun._id, bun._id])
    );
  }, [onSubmit, selectedIngredients, bun]);

  if (ingredients.length === 0) {
    return null;
  }

  return (
    <section className={`${burgerConstructorStyles.constructor_section} pt-25`}>
      <div className={burgerConstructorStyles.constructor_list}>
        <div className="pl-9 pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
        <div
          className={`${burgerConstructorStyles.constructor_items} ${burgerConstructorStyles.scrollbar}  mt-4 mb-4 pl-4 pr-4`}
        >
          {selectedIngredients.map((ingredient) => {
            return (
              <div
                className={`${burgerConstructorStyles.constructor_item} mb-4 pl-8`}
                key={ingredient._id}
              >
                <div className={burgerConstructorStyles.ingredient_button}>
                  <button className={burgerConstructorStyles.drag_button}>
                    <DragIcon type="primary" />
                  </button>
                </div>
                <ConstructorElement
                  text={ingredient.name}
                  price={ingredient.price}
                  thumbnail={ingredient.image}
                />
              </div>
            );
          })}
        </div>
        <div className="pl-9 pr-4">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name}
            price={bun.price}
            thumbnail={bun.image}
          />
        </div>
      </div>
      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.order_price} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{orderSum}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleSubmit}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
