import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext } from "react";
import { BurgerContext } from "../../utils/burger-context";
import burgerConstructorStyles from "./burger-constructor.module.css";

function BurgerConstructor({ handleOrderDetailsOpen }) {
  const ingredients = useContext(BurgerContext);
  const bunIngredient = ingredients.find((ingredient) => {
    return ingredient.type === "bun";
  });
  const ingredientsArray = ingredients.filter((ingredient) => {
    return ingredient.type !== "bun";
  });
  const ingredientsSum = ingredientsArray.reduce(function (summ, current) {
    return summ + current.price;
  }, 0);
  if (ingredients.length === 0) {
    return null;
  }
  const orderSum = ingredientsSum + bunIngredient.price * 2;
  console.log(orderSum);
  return (
    <section className={`${burgerConstructorStyles.constructor_section} pt-25`}>
      <div className={burgerConstructorStyles.constructor_list}>
        <div className="pl-9 pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bunIngredient.name}
            price={bunIngredient.price}
            thumbnail={bunIngredient.image}
          />
        </div>
        <div
          className={`${burgerConstructorStyles.constructor_items} ${burgerConstructorStyles.scrollbar}  mt-4 mb-4 pl-4 pr-4`}
        >
          {ingredients
            .filter((ingredient) => {
              return ingredient.type !== "bun";
            })
            .map((ingredient) => {
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
            text={bunIngredient.name}
            price={bunIngredient.price}
            thumbnail={bunIngredient.image}
          />
        </div>
      </div>
      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.order_price} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{orderSum}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="large" onClick={handleOrderDetailsOpen}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
