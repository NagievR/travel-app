import React, { useState, useContext } from "react";

import s from "./currency.module.css";

import { currencyAPI } from "../../../services/api.service";

import TravelAppContext from "../../context/context";

const Currency = () => {
  const [USDrate, SetUSDRate] = useState(1);
  const [EURrate, SetEURRate] = useState(2);
  const [RUBrate, SetRUBRate] = useState(3);
  const { language, currency } = useContext(TravelAppContext);

  async function getRates(currency) {
    const response = await currencyAPI.fetchCurrency(currency.name["EN"]);
    SetUSDRate(
      `${
        currency.name["EN"] === "USD" ? "1.0000" : response.rates.USD.toFixed(4)
      } `
    );
    SetEURRate(
      `${
        currency.name["EN"] === "EUR" ? "1.0000" : response.rates.EUR.toFixed(4)
      } `
    );
    SetRUBRate(
      `${
        currency.name["EN"] === "RUB" ? "1.0000" : response.rates.RUB.toFixed(4)
      } `
    );
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
      </div>
    </div>
  );
};

export default Currency;
