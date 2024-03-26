import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredNanniesFavorite } from "store/favorites/selector";
import { filtersFavoriteNanniesAction } from "store/filters/slice";
import FavoritesPageStyled from "./FavoritesPageStyled";
import Filters from "components/Filters";
import NanniesList from "components/NanniesList";
import { Link } from "react-router-dom";
import BasicModalWindow from "components/BasicModalWindow";
import NannyModal from "components/NannyModal";

const FavoritesPage = () => {
  const dispatch = useDispatch();

  const [selectedFilter, setSelectedFilter] = useState("A to Z");
  const [nannyFavoriteData, setNannyFavoriteData] = useState(null);
  const [limit, setLimit] = useState(3);
  const [isModal, setIsModal] = useState(false);

  const filteredNanniesFavorite = useSelector(selectFilteredNanniesFavorite);
  const nannies = filteredNanniesFavorite.slice(0, limit);

  const getSelectedFilter = (event) => {
    setSelectedFilter(event.label);
    dispatch(filtersFavoriteNanniesAction(event.label));
    setLimit(3);
  };

  const toggleModal = (nannyData) => {
    setNannyFavoriteData(nannyData);
    return setIsModal((preModal) => {
      return !preModal;
    });
  };

  return (
    <FavoritesPageStyled className="container">
      <h1 className="is-hidden">Favorites Nannies Page</h1>
      {nannies.length > 0 && nannies !== 0 ? (
        <>
          <Filters
            getSelectedFilter={getSelectedFilter}
            select={selectedFilter}
          />
          <NanniesList nanniesData={nannies} toggleModal={toggleModal} />
          {(nannies.length > 3 || nannies.length % 3 === 0) && (
            <button
              className="more-btn btn"
              type="button"
              onClick={() => setLimit(limit + 3)}
            >
              Load more
            </button>
          )}
        </>
      ) : (
        <div className="favorites-wrapper-stub">
          <h2 className="favorites-stub-text">
            Your list of favorites is empty...
          </h2>
          <Link
            className="favorites-link btn"
            aria-label="Nannies page"
            to="/nannies"
          >
            Go to catalog Nannies
          </Link>
        </div>
      )}

      {isModal && (
        <BasicModalWindow toggleModal={toggleModal}>
          <NannyModal
            nannyData={{
              name: nannyFavoriteData.name,
              avatar_url: nannyFavoriteData.avatar_url,
            }}
            toggleModal={toggleModal}
          />
        </BasicModalWindow>
      )}
    </FavoritesPageStyled>
  );
};

export default FavoritesPage;
