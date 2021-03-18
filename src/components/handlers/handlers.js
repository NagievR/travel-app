export const handleLanguageChange = (event, dispatch) => {
  event.preventDefault();
  dispatch({ type: "CHANGE_LANGUAGE", payload: event.target.value });
};

export const handleSearchTextChange = (event, dispatch) => {
  event.preventDefault();
  dispatch({ type: "CHANGE_SEARCH_TEXT", payload: event.target.value });
};

export const handleSearchTextSubmit = (event, dispatch) => {
  event.preventDefault();
  dispatch({ type: "SUBMIT_SEARCH_TEXT" });
};

export const handleSearchTextClear = (event, dispatch) => {
  event.preventDefault();
  dispatch({ type: "CLEAR_SEARCH_TEXT" });
};
