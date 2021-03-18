import React from "react";

import s from "./shortinfo.module.css";
function ShortInfo({ country, capital, info, picture, language }) {
  return (
    <div className={s.countryInfo}>
      <div className={s.mainPhoto}>
        <img src={picture} alt="pic" width="60%" />
        <h3>
          {language === "EN"
            ? `${country} , capital ${capital}.`
            : language === "РУС"
            ? `${country} , столица ${capital}.`
            : `${country} , başkent ${capital}.`}
        </h3>
        <p className={s.country_information}>{info}</p>
      </div>
    </div>
  );
}

export default ShortInfo;
