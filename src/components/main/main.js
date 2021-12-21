import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useCallback, useEffect, useRef, useState } from "react";
import IngredientsSection from "../ingredients-section/ingredients-section";
import mainSectionStyles from "./main.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";
import { OrderDetails } from "../order-details/order-details";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";

Main.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientType).isRequired,
};

function Main({ ingredients }) {
  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const handleIngredientDetailsOpen = useCallback((ingredient) => {
    setSelectedIngredient(ingredient);
  }, []);
  const handleIngredientDetailsClose = useCallback(() => {
    setSelectedIngredient(null);
  }, []);
  const [order, setOrder] = useState(null);
  const handleOrderDetailsOpen = useCallback(() => {
    setOrder({});
  }, []);
  const handleOrderDetailsClose = useCallback(() => {
    setOrder(null);
  }, []);
  const [tab, setTab] = useState("bun");
  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();
  useEffect(() => {
    if (tab === "bun") {
      bunRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "sauce") {
      sauceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (tab === "main") {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [tab]);

  return (
    <main className={`${mainSectionStyles.main} pb-10`}>
      <section
        className={`${mainSectionStyles.ingredients_section} pt-10 mr-10`}
      >
        <h1 className="text text_type_main-large">Соберите бургер</h1>
        <div className={`${mainSectionStyles.ingredients_tabs} pt-5`}>
          <Tab value="bun" active={tab === "bun"} onClick={setTab}>
            Булки
          </Tab>
          <Tab value="sauce" active={tab === "sauce"} onClick={setTab}>
            Соусы
          </Tab>
          <Tab value="main" active={tab === "main"} onClick={setTab}>
            Начинки
          </Tab>
        </div>
        <div
          className={`${mainSectionStyles.scrollbox} ${mainSectionStyles.scrollbar}`}
        >
          <IngredientsSection
            ref={bunRef}
            key="bun"
            title="Булки"
            type="bun"
            ingredients={ingredients}
            onIngredientClick={handleIngredientDetailsOpen}
          />
          <IngredientsSection
            ref={sauceRef}
            key="sauce"
            title="Соусы"
            type="sauce"
            ingredients={ingredients}
            onIngredientClick={handleIngredientDetailsOpen}
          />
          <IngredientsSection
            ref={mainRef}
            key="main"
            title="Начинки"
            type="main"
            ingredients={ingredients}
            onIngredientClick={handleIngredientDetailsOpen}
          />
        </div>
      </section>
      <section className={`${mainSectionStyles.constructor_section} pt-25`}>
        <div className={mainSectionStyles.constructor_list}>
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
            className={`${mainSectionStyles.constructor_items} ${mainSectionStyles.scrollbar}  mt-4 mb-4 pl-4 pr-4`}
          >
            {ingredients
              .filter((ingredient) => {
                return ingredient.type !== "bun";
              })
              .map((ingredient) => {
                return (
                  <div
                    className={`${mainSectionStyles.constructor_item} mb-4 pl-8`}
                    key={ingredient._id}
                  >
                    <div className={mainSectionStyles.ingredient_button}>
                      <button className={mainSectionStyles.drag_button}>
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
        <div className={`${mainSectionStyles.order} pt-10`}>
          <div className={`${mainSectionStyles.order_price} mr-10`}>
            <span className="text text_type_digits-medium mr-2">610</span>
            <CurrencyIcon type="primary" />
          </div>
          <Button type="primary" size="large" onClick={handleOrderDetailsOpen}>
            Оформить заказ
          </Button>
        </div>
      </section>
      <Modal
        isVisible={!!selectedIngredient}
        onClose={handleIngredientDetailsClose}
        title="Детали ингредиента"
      >
        <IngredientDetails ingredient={selectedIngredient} />
      </Modal>
      <Modal isVisible={!!order} onClose={handleOrderDetailsClose}>
        <OrderDetails order={order} />
      </Modal>
    </main>
  );
}

export default Main;
