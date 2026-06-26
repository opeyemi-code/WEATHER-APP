import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import DataContext from "./DataContext";
import type { GeocodingResponse } from "@/Types/models";

function useGeocoding() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useGeocoding must be used inside DataProvider");
  }

  const { searchedInput } = context;

  return useQuery<GeocodingResponse>({
    queryKey: ["geocoding", searchedInput],

    enabled: searchedInput.trim().length > 0,

    queryFn: () =>
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${searchedInput}&language=en&format=json`,
      ).then((res) => res.json()),
  });
}

export default useGeocoding;
