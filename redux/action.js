export function DisplayType(pageType) {
  return {
    type: "PAGE_CHANGE",
    payload: pageType,
  };
}

export function changeDate(month, year) {
  return {
    type: "CHANGE_DATE",
    payload: { month: month, year: year },
  };
}

export const DisplayCalender = () => {
  return {
    type: "DISPLAY_OPTION",
  };
};
