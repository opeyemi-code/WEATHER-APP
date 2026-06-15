import ForecastCards from "./ForecastCards";
import useWeather from "@/context/UseWeather";
import { weatherCodeMap } from "@/utils/weatherCodeMap";

function ForecastGrid() {
  const { data: weather } = useWeather();

  if (!weather?.daily) return null;

  return (
    <section className="my-3 md:mb-0">
      <h2 className="text-(--neutral-200) text-lg font-semibold mb-3">
        Daily forecast
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {weather.daily.temperature_2m_max.map(
          (maxTemp: number, index: number) => {
            const code = weather.daily.weather_code[index];

            return (
              <ForecastCards
                key={index}
                day={new Date(weather.daily.time[index]).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "short",
                  },
                )}
                weatherIcon={weatherCodeMap[code]?.icon ?? "☀️"}
                max={`${Math.round(maxTemp)}°`}
                min={`${Math.round(weather.daily.temperature_2m_min[index])}°`}
              />
            );
          },
        )}
      </div>
    </section>
  );
}

export default ForecastGrid;
