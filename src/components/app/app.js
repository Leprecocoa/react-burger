import Header from "../header/header.js";
import appstyles from "./app.module.css";
import Main from "../main/main.js";
import { useIngredients } from "../../utils/api.js";
import { BurgerContext } from "../../utils/burger-context.js";

function App() {
  const { ingredients } = useIngredients();
  return (
    <BurgerContext.Provider value={ingredients}>
      <div className={appstyles.page}>
        <Header />
        <Main />
      </div>
    </BurgerContext.Provider>
  );
}
export default App;
