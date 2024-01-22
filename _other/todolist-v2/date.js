function getDate() {
  let today = new Date();
  let weekEnd = (!(today.getDay() ^ 6) || !(today.getDay() ^ 0)) ? true : false;
  const options = { 
    weekday: "long" 
  };

  let day = new Intl.DateTimeFormat("en-US", options).format(today);

  return { day, weekEnd };
}

export { getDate }
