import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "components/Layout";
import WelcomePage from "pages/WelcomePage";
import NanniesPage from "pages/NanniesPage";
import FavoritesPage from "pages/FavoritesPage";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "store/auth/selector";
import { useEffect } from "react";
import { refreshUser } from "store/auth/slice";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
    if (isLoggedIn) {
      navigate("/");
    }
  }, [dispatch]);

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
