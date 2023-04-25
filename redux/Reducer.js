const date = new Date();

const intialState = {
  isOpen: false,
  pageType: "date",
  month: date.getMonth(),
  year: date.getFullYear(),
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case "PAGE_CHANGE":
      return { ...state, pageType: action.payload };

    case "CHANGE_DATE":
      return {
        ...state,
        year: action.payload.year,
        month: action.payload.month,
      };

    case "DISPLAY_OPTION": {
      return {
        ...state,
        pageType: state.isOpen ? "date" : state.pageType,
        isOpen: !state.isOpen,
      };
    }

    default:
      return state;
  }
};

export default reducer;
