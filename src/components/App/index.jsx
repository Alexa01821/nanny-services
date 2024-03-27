import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "components/Layout";
import WelcomePage from "pages/WelcomePage";
import NanniesPage from "pages/NanniesPage";
import FavoritesPage from "pages/FavoritesPage";
import { selectIsLoggedIn } from "store/auth/selector";
import { useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import { useSelector } from "react-redux";

const App = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route
            path="/favorites"
            element={
              <PrivateRoute redirectTo="/" component={<FavoritesPage />} />
            }
          />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
