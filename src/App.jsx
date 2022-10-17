import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AppBar } from "./shared/AppBar";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import { PageNotFound } from "./pages/PageNotFound";
import { UserTable } from "./components/UserTable";
import { AddUser } from "./users/AddUser";
import "./App.css";

function App() {
  return (
    <>
      <AppBar />
      <div className="container">
        <Routes>
          <Route path={PrivateRoutes.PARAM_HOME} element={<HomePage />} />
          <Route path={PrivateRoutes.PARAM_OVERVIEW} element={<UserTable />} />
          <Route path={PrivateRoutes.PARAM_ADD_USER} element={<AddUser />} />
          <Route path={PrivateRoutes.PARAM_404} element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
