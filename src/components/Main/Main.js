import React from "react";
import Card from "./Card/Card";
import s from "./main.module.css";

import TravelAppContext from "../context/context";

const Main = () => {
  const { countries, language } = React.useContext(TravelAppContext);
  const addCard = () => {
    return countries.map((data, idx) => {
      switch (language) {
        case "EN":
          return (
            <Card
              imgUrl={data.imgURL}
              country={data.countryEN}
              capital={data.capitalEN}
              key={idx}
            />
          );
        case "РУС":
          return (
            <Card
              imgUrl={data.imgURL}
              country={data.countryRU}
              capital={data.capitalRU}
              key={idx}
            />
          );
        case "TÜR":
          return (
            <Card
              imgUrl={data.imgURL}
              country={data.countryTR}
              capital={data.capitalTR}
              key={idx}
            />
          );
        default:
          return (
            <Card
              imgUrl={data.imgURL}
              country={data.countryEN}
              capital={data.capitalEN}
              key={idx}
            />
          );
      }
    });
  };

  return (
    <main>
      <div className={s.cards_container}>{addCard()}</div>
    </main>
  );
};

export default Main;
