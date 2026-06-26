import { useContext } from "react";
import ForecastGrid from "../ForecastGrid";
import Hero from "../Hero";
import HeroWeatherCard from "../HeroWeatherCard";
import HourlyForecastGrid from "../HourlyForecastGrid";
import WeatherStatsGrid from "../WeatherStatsGrid";
import DataContext from "@/context/DataContext";

function WeatherContent() {
  const { isSearchError } = useContext(DataContext)!;

  return (
    <>
      <main>
        <Hero />
        {!isSearchError ? (
          <section className="md:grid grid-cols-4 gap-3">
            <div className="col-span-3 grid gap-5 h-1/2">
              <HeroWeatherCard />
              <WeatherStatsGrid />
              <ForecastGrid />
            </div>
            <HourlyForecastGrid />
          </section>
        ) : (
          <p className="text-center text-(--neutral-0) font-medium">
            No search result found!
          </p>
        )}
      </main>
    </>
  );
}
export default WeatherContent;
