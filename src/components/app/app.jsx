import Header from "../header/header";
import appstyles from "./app.module.css";
import Main from "../main/main";

function App() {
  return (
    <div className={appstyles.page}>
      <Header />
      <Main />
    </div>
  );
}
export default App;
