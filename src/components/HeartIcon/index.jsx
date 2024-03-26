import { useDispatch, useSelector } from "react-redux";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import HeartWrap from "./HeartIcon";
import { selectFavorites } from "store/favorites/selector";
import {
  addFavoritesNannies,
  deleteFavoritesNannies,
} from "store/favorites/slice";
import { selectIsLoggedIn } from "store/auth/selector";
import { Notify } from "notiflix";

const HeartIcon = ({ nannyData }) => {
  const dispatch = useDispatch();
  const nanniesFavorites = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isChecked = nanniesFavorites.some(
    ({ name }) => name === nannyData.name
  );

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(deleteFavoritesNannies(nannyData));
    } else {
      dispatch(addFavoritesNannies(nannyData));
    }
  };

  const handleToggleNotAuthFavorite = () => {
    Notify.failure(
      "If you want to add this nanny to favorites list, you need to log in or sign up."
    );
  };
  return (
    <HeartWrap>
      {isLoggedIn ? (
        <Checkbox
          icon={<FavoriteBorder style={{ fill: "var(--color-text-black)" }} />}
          checkedIcon={<Favorite style={{ fill: "var(--color-accent)" }} />}
          checked={isChecked}
          onChange={handleToggleFavorite}
          className="icon-svg"
        />
      ) : (
        <FavoriteBorder
          className="icon-svg"
          style={{ fill: "var(--color-text-black)" }}
          onClick={handleToggleNotAuthFavorite}
        />
      )}
    </HeartWrap>
  );
};

export default HeartIcon;
