import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix";
import BasicModalWindow from "components/BasicModalWindow";
import Filters from "components/Filters";
import NanniesList from "components/NanniesList";
import { DBRef } from "../../firebase";
import { child, get } from "firebase/database";
import { getNannies } from "store/nannies/slice";
import { filtersNanniesAction } from "store/filters/slice";
import { selectFilteredNannies } from "store/nannies/selector";
import NanniesPageStyled from "./ButtonStyled";

const NanniesPage = () => {
  const dispatch = useDispatch();

  const [selectedFilter, setSelectedFilter] = useState("A to Z");
  const [nannyData, setNannyData] = useState(null);
  const [limit, setLimit] = useState(3);
  const [isModal, setIsModal] = useState(true);

  const filteredNannies = useSelector(selectFilteredNannies);
  const nannies = filteredNannies.slice(0, limit);

  const getSelectedFilter = (event) => {
    setSelectedFilter(event.label);
    dispatch(filtersNanniesAction(event.label));
    setLimit(3);
  };

  const toggleModal = (nannyData) => {
    setNannyData(nannyData);
    return setIsModal((preModal) => {
      return !preModal;
    });
  };

  useEffect(() => {
    get(child(DBRef, "nannies"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          dispatch(getNannies(snapshot.val()));
        } else {
          Notify.failure("Unfortunately we were unable to find nannies", {
            timeout: 2000,
          });
        }
      })
      .catch((error) => {
        Notify.info("Oops, something went wrong", {
          timeout: 2000,
        });
        console.log(error);
      });
  }, [dispatch]);

  return (
    <NanniesPageStyled className="container">
      <h1 className="is-hidden">Nannies Page</h1>
      <Filters getSelectedFilter={getSelectedFilter} select={selectedFilter} />
      <NanniesList nanniesData={nannies} toggleModal={toggleModal} />
      {nannies.length % 3 === 0 && (
        <button
          className="more-btn btn"
          type="button"
          onClick={() => setLimit(limit + 3)}
        >
          Load more
        </button>
      )}

      {isModal && (
        <BasicModalWindow toggleModal={toggleModal}></BasicModalWindow>
      )}
    </NanniesPageStyled>
  );
};

export default NanniesPage;
