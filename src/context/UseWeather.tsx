import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import DataContext from "./DataContext";

function useWeather() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useWeather must be used inside DataProvider");
  }

  const { location, isTemperatureUnit, isWindSpeedUnit, isPrecipitationUnit } =
    context;

  const { latitude, longitude } = location;

  return useQuery({
    queryKey: [
      "weather",
      latitude,
      longitude,
      isTemperatureUnit,
      isWindSpeedUnit,
      isPrecipitationUnit,
    ],

    enabled: latitude !== 0 && longitude !== 0,

    queryFn: async () => {
      const res = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&wind_speed_unit=${isWindSpeedUnit}&precipitation_unit=${isPrecipitationUnit}&temperature_unit=${isTemperatureUnit}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code`,
      );

      return res.json();
    },
  });
}

export default useWeather;
