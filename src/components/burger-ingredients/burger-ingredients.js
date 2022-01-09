import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useEffect, useRef, useState } from "react";
import IngredientsSection from "../ingredients-section/ingredients-section";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

BurgerIngredients.propTypes = {
  handleIngredientDetailsOpen: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(ingredientType),
};

function BurgerIngredients({ handleIngredientDetailsOpen, ingredients }) {
  // const [tab, setTab] = useState("bun");
  const [current, setCurrent] = useState("bun");
  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  useEffect(() => {
    if (current === "bun") {
      bunRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (current === "sauce") {
      sauceRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (current === "main") {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [current]);

  return (
    <section
      className={`${burgerIngredientsStyles.ingredients_section} pt-10 mr-10`}
    >
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.ingredients_tabs} pt-5`}>
        <Tab value="bun" active={current === "bun"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauce" active={current === "sauce"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="main" active={current === "main"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <div
        className={`${burgerIngredientsStyles.scrollbox} ${burgerIngredientsStyles.scrollbar}`}
        onScroll={(evt) => {
          const container = evt.target;
          const scrollPosition = container.scrollTop;
          const positionOfSection2 = sauceRef.current.offsetTop;
          const positionOfSection3 = mainRef.current.offsetTop;
          if (scrollPosition + 200 <= positionOfSection2) {
            setCurrent("bun");
          } else if (scrollPosition + 200 <= positionOfSection3) {
            setCurrent("sauce");
          } else {
            setCurrent("main");
          }
        }}
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
  );
}

export default BurgerIngredients;
