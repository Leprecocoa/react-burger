import Header from "../header/header.js";
import appstyles from "./app.module.css";
import Main from "../main/main.js";

function App() {
  return (
    <div className={appstyles.page}>
      <Header />
      <Main />
    </div>
  );
}
export default App;
