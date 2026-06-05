import ForecastGrid from "./ForecastGrid";
import Header from "./Header";
import Hero from "./Hero";
import HeroWeatherCard from "./HeroWeatherCard";
import HourlyForecastGrid from "./HourlyForecastGrid";
import WeatherStatsGrid from "./WeatherStatsGrid";

function AppContent() {
  return (
    <>
      <div className="px-4 py-6 md:px-16">
        <Header />
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
      </div>
    </>
  );
}
export default AppContent;
