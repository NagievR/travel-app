const weekDays = {
  EN: {
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
    0: "Sun",
    7: "Sun",
  },
  РУС: {
    1: "Пн",
    2: "Вт",
    3: "Ср",
    4: "Чт",
    5: "Пт",
    6: "Сб",
    7: "ВС",
    0: "Вс",
  },
  TÜR: {
    1: "Pazartesi",
    2: "Salı",
    3: "Çarsamba",
    4: "Persembe",
    5: "Cuma",
    6: "Cumartesi",
    7: "Pazar",
    0: "Pazar",
  },
};

export const findWeekDay = (weekDayNum, currentLanguage) => {
  return " " + weekDays[currentLanguage][weekDayNum] + " ";
};

const months = {
  EN: {
    0: "Jan.",
    1: "Feb.",
    2: "Mar.",
    3: "Apr.",
    4: "May",
    5: "Jun.",
    6: "Jul",
    7: "Aug",
    8: "Sep.",
    9: "Oct.",
    10: "Nov.",
    11: "Dec.",
  },
  РУС: {
    0: "Янв.",
    1: "Фев.",
    2: "Мар.",
    3: "Апр.",
    4: "Май",
    5: "Июн.",
    6: "Июл.",
    7: "Авг.",
    8: "Сен.",
    9: "Окт.",
    10: "Ноя.",
    11: "Дек.",
  },
  TÜR: {
    0: "Oca.",
    1: "Şub.",
    2: "Mar.",
    3: "Nis.",
    4: "May.",
    5: "Haz.",
    6: "Tem.",
    7: "Ağu.",
    8: "Eyl.",
    9: "Eki.",
    10: "Kas.",
    11: "Ara.",
  },
};

export const findMonth = (monthNum, currentLanguage) => {
  return " " + months[currentLanguage][monthNum] + " ";
};
