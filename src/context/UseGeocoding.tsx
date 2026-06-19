import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import DataContext from "./DataContext";

function useGeocoding() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useGeocoding must be used inside DataProvider");
  }

  const { searchedCity } = context;

  return useQuery({
    queryKey: ["geocoding", searchedCity],

    enabled: searchedCity.trim().length > 0,

    queryFn: () =>
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchedCity}&count=1&language=en&format=json`,
      ).then((res) => res.json()),
  });
}

export default useGeocoding;
