import useWeather from "@/context/UseWeather";
import Header from "./Header";
import WeatherContent from "./states/WeatherContent";
import WeatherLoadingState from "./states/WeatherLoadingStates";
import WeatherErrorState from "./states/WeatherErrorState";

function AppContent() {
  const { data: weather, isLoading, isError } = useWeather();
  return (
    <div className="px-[5%] py-6 md:px-[10]">
      <Header />
      {isLoading && <WeatherLoadingState />}
      {isError && <WeatherErrorState />}
      {weather && <WeatherContent />}
    </div>
  );
}
export default AppContent;
