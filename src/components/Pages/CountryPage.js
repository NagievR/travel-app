import React from "react";
import s from "./countryPage.module.css";

import ShortInfo from "../ShortInfo/ShortInfo";
import Widgets from "../Widgets/Widgets";
import MapWidget from "./map/Map";
import PhotoVideo from "../PhotoVideo/PhotoVideo";

import TravelAppContext from "../context/context";
import chooseCountryInfo from "../handlers/chooseCountryInfo";

const CountryPage = () => {
  const { countryToDisplay, language } = React.useContext(TravelAppContext);

  let country = chooseCountryInfo(countryToDisplay);

  return (
    <div>
      <div className={s.main}>
        <Widgets coordinates={country.coordinates} />
        <ShortInfo
          {...country}
          language={language}
          picture={country.pictures[0].original}
        />

        <div className={s.mapBox}>
          <div className={s.text}>&#10077; find your way &#10078;</div>
          <div className={s.map}>
            <MapWidget 
              coordinates={country.coordinates} 
              region={country.region}
              />
          </div>
        </div>
        <PhotoVideo pictures={country.pictures} video={country.video} />
      </div>
    </div>
  );
};

export default CountryPage;
