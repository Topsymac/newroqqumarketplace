export const formatDate = (date) => {

  let hour = date.getHours();
  let minute = date.getMinutes();
  
  let type;

  if (hour >= 12) {
    type = "PM";
  } else {
    type = "AM";
  }

  hour = hour % 12;
  hour = hour ? hour : 12;
    minute = minute < 10 ? "0" + minute : minute;

  const formattedTime = hour + ":" + minute + " " + type;
  return formattedTime;

};
