import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "../app-routes/app-routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
export default App;
