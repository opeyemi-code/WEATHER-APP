import useWeather from "@/context/UseWeather";
import Header from "./Header";
import WeatherContent from "./states/WeatherContent";
import WeatherLoadingState from "./states/WeatherLoadingStates";
import WeatherErrorState from "./states/WeatherErrorState";
import { useContext } from "react";
import DataContext from "@/context/DataContext";
import useGeocoding from "@/context/useGeocoding";

function AppContent() {
  const { data: weather, isLoading, isError } = useWeather();
  const { data: geocoding } = useGeocoding;
  const { locationError } = useContext(DataContext)!;

  return (
    <div className="px-[5%] py-6">
      <Header />
      {isLoading && !locationError && <WeatherLoadingState />}
      {(isError || locationError) && <WeatherErrorState />}
      {weather && <WeatherContent />}
    </div>
  );
}
export default AppContent;
