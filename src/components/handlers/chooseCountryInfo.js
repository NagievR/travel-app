import {
  switzerland,
  poland,
  usa,
  russia,
  spain,
  italy,
  czechia,
  turkey,
} from "../Pages/countryInfo/countryInfo";
const chooseCountryInfo = (currentCountry) => {
  switch (currentCountry) {
    case "Switzerland":
      return {
        ...switzerland,
        country: switzerland.countryEN,
        capital: switzerland.capitalEN,
        info: switzerland.infoEN,
        area: switzerland.area,
        cityTime: switzerland.cityTime,
      };
    case "Czechia":
      return {
        ...czechia,
        country: czechia.countryEN,
        capital: czechia.capitalEN,
        info: czechia.infoEN,
        area: czechia.area,
        cityTime: czechia.cityTime,
      };
    case "Poland":
      return {
        ...poland,
        country: poland.countryEN,
        capital: poland.capitalEN,
        info: poland.infoEN,
        area: poland.area,
        cityTime: poland.cityTime,
      };
    case "USA":
      return {
        ...usa,
        country: usa.countryEN,
        capital: usa.capitalEN,
        info: usa.infoEN,
        area: usa.area,
        cityTime: usa.cityTime,
      };
    case "Turkey":
      return {
        ...turkey,
        country: turkey.countryEN,
        capital: turkey.capitalEN,
        info: turkey.infoEN,
        area: turkey.area,
        cityTime: turkey.cityTime,
      };
    case "Russia":
      return {
        ...russia,
        country: russia.countryEN,
        capital: russia.capitalEN,
        info: russia.infoEN,
        area: russia.area,
        cityTime: russia.cityTime,
      };
    case "Spain":
      return {
        ...spain,
        country: spain.countryEN,
        capital: spain.capitalEN,
        info: spain.infoEN,
        area: spain.area,
        cityTime: spain.cityTime,
      };
    case "Italy":
      return {
        ...italy,
        country: italy.countryEN,
        capital: italy.capitalEN,
        info: italy.infoEN,
        area: italy.area,
        cityTime: italy.cityTime,
      };
    case "Швейцария":
      return {
        ...switzerland,
        country: switzerland.countryRU,
        capital: switzerland.capitalRU,
        info: switzerland.infoRU,
        area: switzerland.area,
        cityTime: switzerland.cityTime,
      };
    case "Чехия":
      return {
        ...czechia,
        country: czechia.countryRU,
        capital: czechia.capitalRU,
        info: czechia.infoRU,
        area: czechia.area,
        cityTime: czechia.cityTime,
      };
    case "Польша":
      return {
        ...poland,
        country: poland.countryRU,
        capital: poland.capitalRU,
        info: poland.infoRU,
        area: poland.area,
        cityTime: poland.cityTime,
      };
    case "США":
      return {
        ...usa,
        country: usa.countryRU,
        capital: usa.capitalRU,
        info: usa.infoRU,
        area: usa.area,
        cityTime: usa.cityTime,
      };
    case "Турция":
      return {
        ...turkey,
        country: turkey.countryRU,
        capital: turkey.capitalRU,
        info: turkey.infoRU,
        area: turkey.area,
        cityTime: turkey.cityTime,
      };
    case "Россия":
      return {
        ...russia,
        country: russia.countryRU,
        capital: russia.capitalRU,
        info: russia.infoRU,
        area: russia.area,
        cityTime: russia.cityTime,
      };
    case "Испания":
      return {
        ...spain,
        country: spain.countryRU,
        capital: spain.capitalRU,
        info: spain.infoRU,
        area: spain.area,
        cityTime: spain.cityTime,
      };
    case "Италия":
      return {
        ...italy,
        country: italy.countryRU,
        capital: italy.capitalRU,
        info: italy.infoRU,
        area: italy.area,
        cityTime: italy.cityTime,
      };
    case "İsviçre":
      return {
        ...switzerland,
        country: switzerland.countryTR,
        capital: switzerland.capitalTR,
        info: switzerland.infoTR,
        area: switzerland.area,
        cityTime: switzerland.cityTime,
      };
    case "Çekya":
      return {
        ...czechia,
        country: czechia.countryTR,
        capital: czechia.capitalTR,
        info: czechia.infoTR,
        area: czechia.area,
        cityTime: czechia.cityTime,
      };
    case "Polonya":
      return {
        ...poland,
        country: poland.countryTR,
        capital: poland.capitalTR,
        info: poland.infoTR,
        area: poland.area,
        cityTime: poland.cityTime,
      };
    case "ABD":
      return {
        ...usa,
        country: usa.countryTR,
        capital: usa.capitalTR,
        info: usa.infoTR,
        area: usa.area,
        cityTime: usa.cityTime,
      };
    case "Türkiye":
      return {
        ...turkey,
        country: turkey.countryTR,
        capital: turkey.capitalTR,
        info: turkey.infoTR,
        area: turkey.area,
        cityTime: turkey.cityTime,
      };
    case "Rusya":
      return {
        ...russia,
        country: russia.countryTR,
        capital: russia.capitalTR,
        info: russia.infoTR,
        area: russia.area,
        cityTime: russia.cityTime,
      };
    case "İspanya":
      return {
        ...spain,
        country: spain.countryTR,
        capital: spain.capitalTR,
        info: spain.infoTR,
        area: spain.area,
        cityTime: spain.cityTime,
      };
    case "İtalya":
      return {
        ...italy,
        country: italy.countryTR,
        capital: italy.capitalTR,
        info: italy.infoTR,
        area: italy.area,
        cityTime: italy.cityTime,
      };
    default:
      return {
        ...italy,
        country: italy.countryTR,
        capital: italy.capitalTR,
        info: italy.infoTR,
        area: italy.area,
        cityTime: italy.cityTime,
      };
  }
};

export default chooseCountryInfo;
