import { ChevronDown } from "lucide-react";
import HourlyForecastCard from "./HourlyForecastCard";
// import weatherImg from "../assets/images/icon-partly-cloudy.webp";
import SelectDayDropdownMenu from "./SelectDayDropdownMenu";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import useWeather from "@/context/UseWeather";
import { weatherCodeMap } from "@/utils/weatherCodeMap";
import { forecastDays } from "@/utils/forecastDays";

function HourlyForecastGrid() {
  const { isSelectDayDropdownOpen, setIsSelectDayDropdownOpen } =
    useContext(DataContext)!;
  const { data: weather } = useWeather();
  const currentDay = weather?.current?.time
    ? forecastDays[new Date(weather.current.time).getDay()].day
    : "";

  return (
    <section className="bg-(--neutral-800) py-4 rounded-lg border border-(--neutral-600) h-[50%]">
      <div className="flex justify-between items-center px-4 ">
        <h2 className="text-(--neutral-0) font-medium text-lg">
          Hourly forecast
        </h2>

        {/* Select Day Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setIsSelectDayDropdownOpen(!isSelectDayDropdownOpen)}
            className="flex items-center gap-1 text-(--neutral-200) bg-(--neutral-600) px-3 py-1.5 rounded-lg hover:cursor-pointer"
            type="button"
          >
            {currentDay}
            <span>
              <ChevronDown />
            </span>
          </button>

          {/* Select Day Dropdown */}
          {isSelectDayDropdownOpen && (
            <SelectDayDropdownMenu currentDay={currentDay} />
          )}
        </div>
      </div>

      {/* Hourly forecast list */}

      <ul className="space-y-3 mt-4 px-4 overflow-y-scroll h-[90%]">
        {weather.hourly.time.slice(0, 24).map((hour: string, index: number) => {
          const time = new Date(hour);
          const temperature = weather.hourly.temperature_2m[index];
          const weatherCode = weather.hourly.weather_code[
            index
          ] as keyof typeof weatherCodeMap;
          const code =
            weatherCodeMap[weatherCode]?.icon || weatherCodeMap[0].icon;
          const formatTime =
            time.getHours() <= 12 ? time.getHours() : time.getHours() - 12;
          const dayTime: string = time.getHours() < 12 ? "AM" : "PM";

          return (
            <HourlyForecastCard
              key={index}
              weatherIcon={code}
              hour={`${formatTime}`}
              dayTime={dayTime}
              deg={`${Math.round(temperature)}°`}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default HourlyForecastGrid;
