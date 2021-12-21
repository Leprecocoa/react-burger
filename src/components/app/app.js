import Header from "../header/header.js";
import appstyles from "./app.module.css";
import Main from "../main/main.js";
import { useIngredients } from "../../utils/use-ingredients.js";

function App() {
  const { ingredients } = useIngredients();
  return (
    <div className={appstyles.page}>
      <Header />
      <Main ingredients={ingredients} />
    </div>
  );
}
export default App;
