import Header from "../header/header.js";
import appstyles from "./app.module.css";
import { burgerIngredients } from "../../utils/data";
import { useState } from "react";
import Main from "../main/main.js";

function App() {
  const [ingredients] = useState(burgerIngredients);
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
