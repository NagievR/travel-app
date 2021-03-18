import { countries } from "../data/data";

export const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      // console.log("Country before lang change " + state.countryToDisplay);
      let translatedCountry = "";
      let temporaryCountry = {};
      for (let i = 0; i < countries.length; i++) {
        if (
          countries[i].countryEN === state.countryToDisplay ||
          countries[i].countryRU === state.countryToDisplay ||
          countries[i].countryTR === state.countryToDisplay
        ) {
          temporaryCountry = countries[i];
          break;
        }
      }
      switch (state.countryToDisplay) {
        case temporaryCountry.countryEN:
          if (action.payload === "РУС") {
            translatedCountry = temporaryCountry.countryRU;
          } else {
            translatedCountry = temporaryCountry.countryTR;
          }
          break;
        case temporaryCountry.countryRU:
          if (action.payload === "EN") {
            translatedCountry = temporaryCountry.countryEN;
          } else {
            translatedCountry = temporaryCountry.countryTR;
          }
          break;
        case temporaryCountry.countryTR:
          if (action.payload === "EN") {
            translatedCountry = temporaryCountry.countryEN;
          } else {
            translatedCountry = temporaryCountry.countryRU;
          }
          break;
        default:
          break;
      }
      // console.log("Country after lang change " + translatedCountry);
      if (action.payload === "EN") {
        localStorage.setItem(
          "state",
          JSON.stringify({
            ...state,
            language: action.payload,
            lang: "en",
            countryToDisplay: translatedCountry,
            utc: temporaryCountry.utc,
            currency: temporaryCountry.currency,
          })
        );
        return {
          ...state,
          language: action.payload,
          lang: "en",
          countryToDisplay: translatedCountry,
          utc: temporaryCountry.utc,
          currency: temporaryCountry.currency,
        };
      } else if (action.payload === "РУС") {
        localStorage.setItem(
          "state",
          JSON.stringify({
            ...state,
            language: action.payload,
            lang: "ru",
            countryToDisplay: translatedCountry,
            utc: temporaryCountry.utc,
            currency: temporaryCountry.currency,
          })
        );
        return {
          ...state,
          language: action.payload,
          lang: "ru",
          countryToDisplay: translatedCountry,
          utc: temporaryCountry.utc,
          currency: temporaryCountry.currency,
        };
      } else {
        localStorage.setItem(
          "state",
          JSON.stringify({
            ...state,
            language: action.payload,
            lang: "tr",
            countryToDisplay: translatedCountry,
            utc: temporaryCountry.utc,
            currency: temporaryCountry.currency,
          })
        );
        return {
          ...state,
          language: action.payload,
          lang: "tr",
          countryToDisplay: translatedCountry,
          utc: temporaryCountry.utc,
          currency: temporaryCountry.currency,
        };
      }
    case "CHANGE_SEARCH_TEXT":
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, searchText: action.payload })
      );
      return { ...state, searchText: action.payload };
    case "CLEAR_SEARCH_TEXT":
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, searchText: "", countries })
      );
      return { ...state, searchText: "", countries };
    case "SUBMIT_SEARCH_TEXT":
      const regex = new RegExp(state.searchText, "i");
      const newCountries = countries.filter((country) => {
        if (state.language === "EN") {
          return regex.test(country.countryEN) || regex.test(country.capitalEN);
        } else if (state.language === "РУС") {
          return regex.test(country.countryRU) || regex.test(country.capitalRU);
        } else if (state.language === "TÜR") {
          return regex.test(country.countryTR) || regex.test(country.capitalTR);
        }
        return country;
      });
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, countries: newCountries })
      );
      return { ...state, countries: newCountries };
    case "SET_COUNTRY_TO_DISPLAY":
      let tempCountry = {};
      for (let i = 0; i < countries.length; i++) {
        if (
          countries[i].countryEN === action.payload ||
          countries[i].countryRU === action.payload ||
          countries[i].countryTR === action.payload
        ) {
          tempCountry = countries[i];
          break;
        }
      }
      localStorage.setItem(
        "state",
        JSON.stringify({
          ...state,
          countryToDisplay: action.payload,
          area: tempCountry.area,
          cityTime: tempCountry.cityTime,
          utc: tempCountry.utc,
          currency: tempCountry.currency,
        })
      );
      return {
        ...state,
        countryToDisplay: action.payload,
        area: tempCountry.area,
        cityTime: tempCountry.cityTime,
        utc: tempCountry.utc,
        currency: tempCountry.currency,
      };
    case "CLOSE_MODAL":
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, showModal: false })
      );
      return { ...state, showModal: false };
    case "OPEN_MODAL":
      localStorage.setItem(
        "state",
        JSON.stringify({ ...state, showModal: true, modalType: action.payload })
      );
      return { ...state, showModal: true, modalType: action.paylod };
    default:
      break;
  }
  return state;
};

if (localStorage.getItem("state") === null) {
  localStorage.setItem(
    "state",
    JSON.stringify({
      language: "EN",
      lang: "en",
      searchText: "",
      countries,
      countryToDisplay: "Switzerland",
      area: "Europe",
      cityTime: "Zurich",
      utc: 1,
      currency: {
        name: {
          EN: "CHF",
          РУС: "ШВФ",
          TÜR: "İSF",
        },
        symbol: "CHF",
      },
      showModal: false,
      modalType: "register",
    })
  );
}
export default JSON.parse(localStorage.getItem("state"));
