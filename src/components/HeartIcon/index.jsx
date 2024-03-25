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

const HeartIcon = ({ nannyData }) => {
  const dispatch = useDispatch();
  const carsFavorites = useSelector(selectFavorites);

  const isChecked = carsFavorites.some(({ name }) => name === nannyData.name);

  const handleToggleFavorite = () => {
    if (isChecked) {
      dispatch(deleteFavoritesNannies(nannyData));
    } else {
      dispatch(addFavoritesNannies(nannyData));
    }
  };
  return (
    <HeartWrap>
      <Checkbox
        icon={<FavoriteBorder style={{ fill: "var(--color-text-black)" }} />}
        checkedIcon={<Favorite style={{ fill: "var(--color-accent)" }} />}
        checked={isChecked}
        onChange={handleToggleFavorite}
        className="icon-svg"
      />
    </HeartWrap>
  );
};

export default HeartIcon;
