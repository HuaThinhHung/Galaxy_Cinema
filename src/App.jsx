import { BrowserRouter, Routes } from "react-router-dom";
import { generateRoutes } from "./routes/routes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>{generateRoutes()}</Routes>
    </BrowserRouter>
  );
}

export default App;
