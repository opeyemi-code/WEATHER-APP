import StatsCard from "./StatsCard";

function WeatherStatsGrid() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-3">
      <StatsCard title="Feels Like" value="64&deg;" />
      <StatsCard title="Humidity" value="46%" />
      <StatsCard title="Wind" value="9 mph" />
      <StatsCard title="Precipitation" value="0 in" />
    </section>
  );
}

export default WeatherStatsGrid;
