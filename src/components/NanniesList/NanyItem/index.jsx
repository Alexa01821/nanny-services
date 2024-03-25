import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "store/auth/selector";
import getAge from "helpers/getAge";
import { useState } from "react";
import NannyItemStyled from "./NanyItemStyled";
import HeartIcon from "components/HeartIcon";

const NannyItem = ({ nannyData, toggleModal }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isShowMore, setIsShowMore] = useState(false);
  const {
    name,
    avatar_url,
    birthday,
    experience,
    reviews,
    education,
    kids_age,
    price_per_hour,
    location,
    about,
    characters,
    rating,
  } = nannyData;

  return (
    <NannyItemStyled>
      <div className="img-wrap">
        <img src={avatar_url} alt="Nanny`s avatar" className="avatar" />
      </div>

      <div className="nanny-inform-wrap">
        <div className="up-inform">
          <span className="title-wrap">Nanny</span>
          <ul className="wrap-icons">
            <li className="icon-item">
              <LocationOnIcon className="icon-svg local" />
              {location}
            </li>
            <li className="icon-item">
              <StarIcon className="icon-svg star" />
              Rating: {rating}
            </li>
            <li className="icon-item">
              Price / 1 hour:<span className="icon-text">{price_per_hour}</span>
            </li>
          </ul>
        </div>
        {isLoggedIn && <HeartIcon nannyData={nannyData} />}
        <h3 className="nanny-title">{name}</h3>
        <ul className="wrap-details">
          <li className="detail-item">
            Age: <span className="detail-item-accent">{getAge(birthday)}</span>
          </li>
          <li className="detail-item">
            Experience: <span className="detail-item-accent">{experience}</span>
          </li>
          <li className="detail-item">
            Kids age: <span className="detail-item-accent">{kids_age}</span>
          </li>
          <li className="detail-item">
            Characters:{" "}
            <span className="detail-item-accent">{characters.join(", ")}</span>
          </li>{" "}
          <li className="detail-item">
            Education: <span className="detail-item-accent">{education}</span>
          </li>
        </ul>
        <p className="nanny-about">{about}</p>
        {!isShowMore ? (
          <button
            type="button"
            onClick={() => setIsShowMore(true)}
            className="show-btn"
          >
            Read more
          </button>
        ) : (
          <div className="wrap-reviews">
            <ul className="reviews-list">
              {reviews.map((reviewer) => {
                return (
                  <li className="review-item" key={nanoid()}>
                    <div className="reviewer-wrap">
                      <div className="reviewer-img">
                        <span className="reviewer-letter">
                          {reviewer.reviewer.slice(0, 1)}
                        </span>
                      </div>
                      <div className="reviewer-inform-wrap">
                        <h3 className="reviewer-title">{reviewer.reviewer}</h3>
                        <div className="reviewer-inform-renting-wrap">
                          <StarIcon className="reviewer-inform-svg" />
                          <span className="reviewer-inform-accent">
                            {reviewer.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="reviewer-text">{reviewer.comment}</p>
                  </li>
                );
              })}
            </ul>
            <button
              className="reviews-btn btn"
              onClick={() => toggleModal(nannyData)}
            >
              Make an appointment
            </button>
          </div>
        )}
      </div>
    </NannyItemStyled>
  );
};

export default NannyItem;
