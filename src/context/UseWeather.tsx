import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import DataContext from "./DataContext";

function useWeather() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useWeather must be used inside DataProvider");
  }

  const { location } = context;

  return useQuery({
    queryKey: ["weather", location.latitude, location.longitude],
    enabled: location.latitude !== 0 && location.longitude !== 0,
    queryFn: () =>
      fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&temperature_unit=celsius&current=temperature_2m,wind_speed_10m&hourly=temperature_2m`,
      ).then((res) => res.json()),
  });
}
export default useWeather;
