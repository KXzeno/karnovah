//jshint esversion:6

module.exports = getDate;

function getDate() {
  let today = new Date();
  let day = "";

  let weekEnd = (!(today.getDay() ^ 6) || !(today.getDay() ^ 0)) ? true : false;
  const options = { weekday: "long" };
  day = new Intl.DateTimeFormat("en-US", options).format(today);

  return day;
}
