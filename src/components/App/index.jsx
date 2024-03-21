import { Routes, Route } from "react-router-dom";
import Layout from "components/Layout";
import WelcomePage from "pages/WelcomePage";
import NanniesPage from "pages/NanniesPage";
import FavoritesPage from "pages/FavoritesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<WelcomePage />} />
          <Route path="/nannies" element={<NanniesPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="*" element={<WelcomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
