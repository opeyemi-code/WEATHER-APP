import ForecastGrid from "../ForecastGrid";
import Hero from "../Hero";
import HeroWeatherCard from "../HeroWeatherCard";
import HourlyForecastGrid from "../HourlyForecastGrid";
import WeatherStatsGrid from "../WeatherStatsGrid";

function WeatherContent() {
  return (
    <>
      <main>
        <Hero />
        <section className="md:grid grid-cols-4 gap-3">
          <div className="col-span-3 grid gap-5">
            <HeroWeatherCard />
            <WeatherStatsGrid />
            <ForecastGrid />
          </div>
          <HourlyForecastGrid />
        </section>
      </main>
    </>
  );
}
export default WeatherContent;
