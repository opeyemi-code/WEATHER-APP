import useWeather from "@/context/UseWeather";
import StatsCard from "./StatsCard";

function WeatherStatsGrid() {
  const { data: weather } = useWeather();

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
      <StatsCard
        title="Feels Like"
        value={`${Math.round(weather.current.apparent_temperature)}°`}
      />
      <StatsCard
        title="Humidity"
        value={`${weather.current.relative_humidity_2m}%`}
      />
      <StatsCard
        title="Wind"
        value={`${Math.round(weather.current.wind_speed_10m)} ${weather.current_units.wind_speed_10m}`}
      />
      <StatsCard
        title="Precipitation"
        value={`${Math.round(weather.current.precipitation)} ${weather.current_units.precipitation}`}
      />
    </section>
  );
}

export default WeatherStatsGrid;
