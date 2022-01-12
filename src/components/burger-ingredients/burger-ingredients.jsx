import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import IngredientsSection from "../ingredients-section/ingredients-section";
import burgerIngredientsStyles from "./burger-ingredients.module.css";
import PropTypes from "prop-types";
import { ingredientType } from "../../utils/types";

const HEIGHT_FROM_TOP = 200;

BurgerIngredients.propTypes = {
  handleIngredientDetailsOpen: PropTypes.func.isRequired,
  ingredients: PropTypes.arrayOf(ingredientType),
};

function BurgerIngredients({ handleIngredientDetailsOpen, ingredients }) {
  const { selectedIngredients, selectedBun } = useSelector(
    ({ burgerConstructor: { selectedIngredients, selectedBun } }) => {
      return {
        selectedIngredients,
        selectedBun,
      };
    }
  );

  const counts = useMemo(() => {
    return ingredients.reduce((acc, ingredient) => {
      if (ingredient.type === "bun") {
        return {
          ...acc,
          [ingredient._id]:
            selectedBun && ingredient._id === selectedBun._id ? 1 : 0,
        };
      }
      return {
        ...acc,
        [ingredient._id]: selectedIngredients.filter(
          (selectedIngredient) => selectedIngredient._id === ingredient._id
        ).length,
      };
    }, {});
  }, [ingredients, selectedIngredients, selectedBun]);

  const [current, setCurrent] = useState("bun");

  const bunRef = useRef();
  const sauceRef = useRef();
  const mainRef = useRef();

  return (
    <section
      className={`${burgerIngredientsStyles.ingredients_section} pt-10 mr-10`}
    >
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.ingredients_tabs} pt-5`}>
        <Tab
          value="bun"
          active={current === "bun"}
          onClick={() => setCurrent("bun")}
        >
          Булки
        </Tab>
        <Tab
          value="sauce"
          active={current === "sauce"}
          onClick={() => setCurrent("sauce")}
        >
          Соусы
        </Tab>
        <Tab
          value="main"
          active={current === "main"}
          onClick={() => setCurrent("main")}
        >
          Начинки
        </Tab>
      </div>
      <div
        className={`${burgerIngredientsStyles.scrollbox} ${burgerIngredientsStyles.scrollbar}`}
        onScroll={(evt) => {
          const container = evt.target;
          const scrollPosition = container.scrollTop;
          const saucePosition = sauceRef.current.offsetTop;
          const mainPosition = mainRef.current.offsetTop;
          if (scrollPosition + HEIGHT_FROM_TOP <= saucePosition) {
            setCurrent("bun");
          } else if (scrollPosition + HEIGHT_FROM_TOP <= mainPosition) {
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
          counts={counts}
          onIngredientClick={handleIngredientDetailsOpen}
        />
        <IngredientsSection
          ref={sauceRef}
          key="sauce"
          title="Соусы"
          type="sauce"
          ingredients={ingredients}
          counts={counts}
          onIngredientClick={handleIngredientDetailsOpen}
        />
        <IngredientsSection
          ref={mainRef}
          key="main"
          title="Начинки"
          type="main"
          ingredients={ingredients}
          counts={counts}
          onIngredientClick={handleIngredientDetailsOpen}
        />
      </div>
    </section>
  );
}

export default BurgerIngredients;
