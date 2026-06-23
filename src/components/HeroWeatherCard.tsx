import DataContext from "@/context/DataContext";
import useWeather from "@/context/UseWeather";
import { weatherCodeMap } from "@/utils/weatherCodeMap";
import { useContext } from "react";

function HeroWeatherCard() {
  const { data: weather } = useWeather();
  const { locationInfo } = useContext(DataContext)!;

  const currentDay = new Date(weather.current.time).toLocaleDateString(
    "en-us",
    { weekday: "long", year: "numeric", month: "long", day: "numeric" },
  );

  const code = weather.current.weather_code as keyof typeof weatherCodeMap;

  const weatherIcon = weatherCodeMap[code];

  const city = `${locationInfo.city}, ${locationInfo.country}`;

  return (
    <div className="heroWeatherCard__bgImg md:flex items-center">
      <div className="w-[80%] mx-auto pt-10 md:flex justify-between items-center">
        <div className="text-center mb-5 lg:text-left">
          <h2 className="text-(--neutral-200) text-3xl font-semibold">
            {city}
          </h2>
          <p className="text-(--neutral-300) text-sm">{currentDay}</p>
        </div>
        <div className="flex items-center gap-12">
          <span aria-label={weatherIcon.label} className="text-6xl">
            {/* <img className="w-28" src={sunnyIcon} alt="Sunny" /> */}
            {weatherIcon.icon}
          </span>
          <p className="text-8xl font-bricolage font-semibold text-(--neutral-0)">
            {Math.round(weather.current.temperature_2m)}°
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroWeatherCard;
