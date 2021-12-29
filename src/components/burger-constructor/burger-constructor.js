import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructorStyles from "./burger-constructor.module.css";

function BurgerConstructor({ ingredients, handleOrderDetailsOpen }) {
  return (
    <section className={`${burgerConstructorStyles.constructor_section} pt-25`}>
      <div className={burgerConstructorStyles.constructor_list}>
        <div className="pl-9 pr-4">
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
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
                    price={50}
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
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </div>
      </div>
      <div className={`${burgerConstructorStyles.order} pt-10`}>
        <div className={`${burgerConstructorStyles.order_price} mr-10`}>
          <span className="text text_type_digits-medium mr-2">610</span>
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
