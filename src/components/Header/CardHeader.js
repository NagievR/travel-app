import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";
import useParallax from "../../custom-hooks/useParallax";

import travelAppLogo from "../../assets/travel_app_logo.png";

import { useContext } from "react";
import TravelAppContext from "../context/context";
import { handleLanguageChange } from "../handlers/handlers";

function CardHeader() {
  const { language, dispatch } = useContext(TravelAppContext);
  const currentBgPosition = useParallax();

  return (
    <header className={s.page_header} style={currentBgPosition}>
      <div className={`${s.rowOne}`}>
        <span>
          <Link to="/">
            <img src={travelAppLogo} alt="travel-logo" />
          </Link>
        </span>
        <div>
          <select
            name="languages"
            id="languages"
            value={language}
            onChange={(event) => handleLanguageChange(event, dispatch)}
          >
            <option value="EN">EN</option>
            <option value="РУС">РУС</option>
            <option value="TÜR">TÜR</option>
          </select>
        </div>
      </div>

      <div className={s.rowTwo} />
      <div className={s.rowThree}></div>
    </header>
  );
}

export default CardHeader;
