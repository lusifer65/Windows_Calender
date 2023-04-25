

// for checking date
export const isToday = (date,month,year) => {
  let currentDate = new Date();
  return (
    currentDate.getDate() === date &&
    currentDate.getMonth() === month &&
    currentDate.getFullYear() === year
  );
};
