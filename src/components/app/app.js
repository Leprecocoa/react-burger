import Header from "../header/header.js";
import appstyles from "./app.module.css";
import Main from "../main/main.js";
import { useIngredients } from "../../utils/use-ingredients.js";

function App() {
  const { ingredients } = useIngredients();
  return (
    <div className="App">
      <div className={appstyles.page}>
        <Header />
        <Main ingredients={ingredients} />
      </div>
    </div>
  );
}
export default App;
