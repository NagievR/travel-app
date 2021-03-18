import React from "react";
import s from "./widgets.module.css";

import Weather from "./Weather/Weather";
import Date from "./Date/Date";
import Currency from "./Currency/Currency";

const Widgets = ({ coordinates }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.currency}>
        <Currency />
      </div>
      <div className={s.weather}>
        <Weather coordinates={coordinates} />
      </div>
      <div className={s.date}>
        <Date />
      </div>
    </div>
  );
};

export default Widgets;
