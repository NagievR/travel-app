import React, { useEffect, useState, useContext } from "react";

import s from "./currency.module.css";

// Import api service for fetching currency
import { apiService, currencyAPI } from "../../../services/api.service";

import TravelAppContext from "../../context/context";
// import library for converting rates
const fx = require("./money.js");

const formatRate = (res, rate) => {
  rate = rate.toUpperCase();
  if (!res.rates[res.base]) {
    // base is always 1
    res.rates[res.base] = 1;
  }
  return res.rates[rate].toFixed(4);
};

const Currency = () => {
  const [USDrate, SetUSDRate] = useState(1);
  const [EURrate, SetEURRate] = useState(2);
  const [RUBrate, SetRUBRate] = useState(3);
  const [currentCurrency, setCurrentCurrency] = useState("");
  const { language, currency } = useContext(TravelAppContext);

  async function getRates(currency) {
    const res = await currencyAPI.fetchCurrency(await currency.name["EN"]);
    SetUSDRate(formatRate(res, 'usd'));
    SetEURRate(formatRate(res, 'eur'));
    SetRUBRate(formatRate(res, 'rub'));
    setCurrentCurrency(res.base);
    fx.rates = res.rates;
    fx.base = res.base;
  }

  const promise = new Promise((resolve, reject) => {
    resolve(getRates(currency));
    reject(new Error("Currency service is unavalable"));
  });

  return (
    <div className={s.currency}>
      <div className={s["rates-block"]}>
        <div className={s["country-currency"]}>
          {`${
            language === "EN"
              ? "Currency"
              : language === "РУС"
              ? "Валюта"
              : "Para birimi"
          }`}
          : {`${currency.name[language]} (${currency.symbol})`}
        </div>
        <div className={s.usd}>
          {`${language === "EN" ? "USD" : language === "РУС" ? "ДОЛ" : "DOL"}`}:{" "}
          {USDrate} $
        </div>
        <div className={s.eur}>
          {`${language === "EN" ? "EUR" : language === "РУС" ? "ЕВР" : "EUR"}`}:{" "}
          {EURrate} €
        </div>
        <div className={s.rub}>
          {`${language === "EN" ? "RUB" : language === "РУС" ? "РУБ" : "RUB"}`}:{" "}
          {RUBrate} ₽
        </div>
        {/* <div className={s["country-currency"]}>cC: {currentCountryRate}</div> */}
      </div>
    </div>
  );
};

export default Currency;
