/// перетворення  день тижння, сьогоднішнє число, місяць, рік.
const dateBuilder = () => {
  let d = new Date();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
};

// поточна дата і час
const localOffset = new Date().getTimezoneOffset() * 60000;
const CurrentDateAndTime = (data) => {
  const utc = data.current.dt * 1000 + localOffset;
  data.currentTime = utc + 1000 * data.timezone_offset;
};

// погодинний погодний зсув
const HourlyWeatherShift = (data) => {
  data.hourly.forEach((hour) => {
    const utc = hour.dt * 1000 + localOffset;
    hour.currentTime = utc + 1000 * data.timezone_offset;
  });
};
export { dateBuilder, CurrentDateAndTime, HourlyWeatherShift };
