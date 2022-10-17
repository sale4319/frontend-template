import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { AppBar } from "./shared/AppBar";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PageNotFound } from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path={PrivateRoutes.PARAM_HOME} element={<HomePage />} />
        <Route path={PrivateRoutes.PARAM_404} element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
