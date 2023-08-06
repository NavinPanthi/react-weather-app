import "./currentWeather.css";
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather my-5 p-5 pt-0  rounded-md w-80 mx-auto text-slate-50">
      <div className="top  justify-around  flex items-center ">
        <div>
          <p className="city m-0 text-lg font-semibold tracking-normal">
            {data.city}
          </p>
          <p className="weather-description m-0  font-normal text-sm">
            {data.weather[0].description}
          </p>
        </div>
        <img
          className="weather-icon w-24"
          src={`icons/${data.weather[0].icon}.png`}
          alt="Icon of weather"
        ></img>
      </div>
      <div className="bottom   justify-around  flex items-center">
        <p className="temperature text-6xl my-4 mx-0 font-bold tracking-tighter">
          {Math.round(data.main.temp)}°C
        </p>
        <div className="details w-full pl-6">
          <div className="parameter-row w-auto">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row ">
            <span className="parameter-label ">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">
              {" "}
              {data.wind.speed}m/s
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">
              {" "}
              {data.main.humidity}%
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">
              {data.main.pressure}hPa
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
