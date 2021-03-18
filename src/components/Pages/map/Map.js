import React from "react";
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl
} from "react-yandex-maps";
import st from "./map.module.css";

import TravelAppContext from "../../context/context";

const MapWidget = ({ coordinates, region }) => {
  const { language } = React.useContext(TravelAppContext);
  const mapRef = React.createRef(null);
  const languages = {
    РУС: "ru_RU",
    EN: "en_US",
  };
  let lang = `${languages[language] || "tr_TR"}`;

  const getRegions = (ymaps) => {
    if (mapRef && mapRef.current) {
      ymaps.borders
        .load("001", {
          quality: 2,
        })
        .then(function (result) {
          let country = result.features.find(
            (item) => item.properties.iso3166 === region
          );
          let geoObject = new ymaps.GeoObject(country);
          mapRef.current.geoObjects.add(geoObject);
        });
    }
  };

  return (
    <div className={st.layer}>
      <YMaps query={{ lang }}>
        <Map
          height="100%"
          width="100%"
          instanceRef={mapRef}
          defaultState={{ center: coordinates, zoom: 5, controls: [] }}
          onLoad={(ymaps) => getRegions(ymaps)}
          modules={["borders", "GeoObject"]}
        >
          <Placemark geometry={coordinates} />
          <FullscreenControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default MapWidget;
