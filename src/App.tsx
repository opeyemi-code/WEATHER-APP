import "./App.css";
import ForecastGrid from "./components/ForecastGrid";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroWeatherCard from "./components/HeroWeatherCard";
import HourlyForecastGrid from "./components/HourlyForecastGrid";
import WeatherStatsGrid from "./components/WeatherStatsGrid";

function App() {
  return (
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
  );
}

export default App;
