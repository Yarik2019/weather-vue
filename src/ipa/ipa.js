// get запить на  ip адресу місце знаходження
export const getIPAdress = async() =>{
  const IpAdress = await fetch(
    `https://ipapi.co/json/ ` // http://ip-api.com/json
  );
  return IpAdress.json();
}

// get запитм на погоду
const api_base = "https://api.openweathermap.org/data/2.5/";
const api_key = "49cc8c821cd2aff9af04c9f98c36eb74";

export const getWeater = async (city) => {
  const response = await fetch(
    `${api_base}/weather?q=${city}&units=metric&appid=${api_key}`
  );
  return response.json();
};
// get запитм на погоду дні тижнів та графіка
export const getWeatherData = async (lat, lon) => {
  // платний ключ 49cc8c821cd2aff9af04c9f98c36eb74
  // https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=7efa332cf48aeb9d2d391a51027f1a71&units=metric`
  const weatherData = await fetch(
    `${api_base}onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${api_key}&units=metric`
  );
  return weatherData.json();
};

// get запить на  міста світу автокомпліт
const mapboxAPIKey =
  "pk.eyJ1Ijoiam9obmtvbWFybmlja2kiLCJhIjoiY2t5NjFzODZvMHJkaDJ1bWx6OGVieGxreSJ9.IpojdT3U3NENknF6_WhR2Q";

export const getSearchResultes = async (searchCity) => {
  const result = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchCity}.json?access_token=${mapboxAPIKey}&types=place`
  );
  return result.json();
};

