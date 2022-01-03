import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { useContext, useEffect, useRef, useState } from "react";
import { BurgerContext } from "../../utils/burger-context";
import IngredientsSection from "../ingredients-section/ingredients-section";
import burgerIngredientsStyles from "./burger-ingredients.module.css";

function BurgerIngredients({ handleIngredientDetailsOpen }) {
  const ingredients = useContext(BurgerContext);
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
    <section
      className={`${burgerIngredientsStyles.ingredients_section} pt-10 mr-10`}
    >
      <h1 className="text text_type_main-large">Соберите бургер</h1>
      <div className={`${burgerIngredientsStyles.ingredients_tabs} pt-5`}>
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
        className={`${burgerIngredientsStyles.scrollbox} ${burgerIngredientsStyles.scrollbar}`}
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
