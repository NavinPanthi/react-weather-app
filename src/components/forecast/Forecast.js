import "./forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const today = new Date().getDay(); //THis will return index of today.
  console.log(today);
  const forecastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today)
  );
  console.log(forecastDays);
  return (
    <>
      <label className="title text-2xl">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item bg-slate-50 rounded-2xl m-1 flex items-center cursor-pointer h-10  p-1 text-xs">
                  <img
                    className="w-10 ml-2"
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day ml-4 font-semibold">
                    {forecastDays[index]}
                  </label>
                  <label className="description mr-4">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max mr-2 text-gray-400">{`${Math.round(
                    item.main.temp_min
                  )}°C/${Math.round(item.main.temp_max)}°C`}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid py-1 grid grid-cols-2 gap-4 px-4">
                <div className="grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure}hPa</label>
                </div>
                <div className="grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>
                <div className="grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>
                <div className="grid-item">
                  <label>Wind speed</label>
                  <label>{item.wind.speed}m/s</label>
                </div>
                <div className="grid-item">
                  <label>Sea levels</label>
                  <label>{item.main.sea_level}m</label>
                </div>
                <div className="grid-item">
                  <label>Feels like </label>
                  <label>{Math.round(item.main.feels_like)}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};
export default Forecast;
