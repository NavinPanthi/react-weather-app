import "./currentWeather.css";
const CurrentWeather = () => {
  return (
    <div className="weather my-5 p-5 pt-0  rounded-md w-80 mx-auto text-slate-50">
      <div className="top  justify-around  flex items-center ">
        <div>
          <p className="city m-0 text-lg font-semibold tracking-normal">
            Belgrade
          </p>
          <p className="weather-description m-0  font-normal text-sm">clouds</p>
        </div>
        <img
          className="weather-icon w-24"
          src="icons/01d.png"
          alt="Icon of weather"
        ></img>
      </div>
      <div className="bottom   justify-around  flex items-center">
        <p className="temperature text-6xl my-4 mx-0 tracking-tighter">28°C</p>
        <div className="details w-full pl-5">
          <div className="parameter-row w-auto">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row ">
            <span className="parameter-label ">Feels like</span>
            <span className="parameter-value">28°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentWeather;
