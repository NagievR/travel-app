import React from "react";
import s from "./card.module.css";
import { Link } from "react-router-dom";

import TravelAppContext from "../../context/context";

const Card = ({ imgUrl, country, capital }) => {
  const { dispatch, language } = React.useContext(TravelAppContext);
  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <div className={s.front} style={{ backgroundImage: `url(${imgUrl})` }}>
          <div className={s["country-block"]}>
            <div className={s.country}>
              <span className={s.location}>{country}</span>
            </div>
            <div className={s.capital}>
              <span className={s.location}>{capital}</span>
            </div>
          </div>
        </div>
        <div className={s.back}>
          <Link
            to="/country"
            className={s.link}
            onClick={() => {
              dispatch({ type: "SET_COUNTRY_TO_DISPLAY", payload: country });
              window.scrollTo(0, 0);
            }}
          >
            <h2>{`${
              language === "EN"
                ? `Read more about ${country}!`
                : language === "РУС"
                ? `Читать больше о стране!`
                : `${country} 
hakkında daha fazlasını oku!`
            }`}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
