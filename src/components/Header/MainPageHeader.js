import React from "react";
import headerStyles from "./header.module.css";
import leftArrowLogo from "../../assets/left_arrow.svg";
import rightArrowLogo from "../../assets/right_arrow.svg";
import searchLogo from "../../assets/search_icon.svg";
import clearLogo from "../../assets/clear_icon.svg";
import travelAppLogo from "../../assets/travel_app_logo.png";
import homeIcon from "../../assets/home_icon.svg";

import { Link } from "react-router-dom";

import { useRef, useEffect, useContext } from "react";
import TravelAppContext from "../context/context";
import {
  handleLanguageChange,
  handleSearchTextChange,
  handleSearchTextSubmit,
  handleSearchTextClear,
} from "../handlers/handlers";

function MainPageHeader() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearchTextSubmit(event, dispatch);
      }
    });
  }, []);

  const { searchText, language, dispatch } = useContext(TravelAppContext);

  return (
    <header>
      <div className={headerStyles.rowOne}>
        <img src={travelAppLogo} alt="travel-logo" />
        <div>
          <Link to="/main">
            <img src={homeIcon} alt="home-icon" />
          </Link>
          <select
            name="languages"
            id="languages"
            value={language}
            onChange={(event) => {
              handleLanguageChange(event, dispatch);
            }}
          >
            <option value="EN">EN</option>
            <option value="РУС">РУС</option>
            <option value="TÜR">TÜR</option>
          </select>
        </div>
      </div>
      <div className={headerStyles.rowTwo}>
        <button>
          <img src={leftArrowLogo} alt="left-arrow-logo" />
        </button>
        <button>
          <img src={rightArrowLogo} alt="right-arrow-logo" />
        </button>
      </div>
      <div className={headerStyles.rowThree}>
        <input
          type="text"
          placeholder={`${
            language === "EN"
              ? " e.g. Italy , e.g. Rome"
              : language === "РУС"
              ? "прим. Италия , прим. Рим"
              : "örneğin İtalya , örneğin Roma"
          }`}
          ref={inputRef}
          value={searchText}
          onChange={(event) => {
            handleSearchTextChange(event, dispatch);
            handleSearchTextSubmit(event, dispatch);
          }}
        />
        <button
          onClick={(event) => {
            handleSearchTextSubmit(event, dispatch);
          }}
        >
          <img src={searchLogo} alt="search-icon" />
        </button>
        <button
          onClick={(event) => {
            handleSearchTextClear(event, dispatch);
          }}
        >
          <img src={clearLogo} alt="clear-icon" />
        </button>
      </div>
    </header>
  );
}

export default MainPageHeader;
