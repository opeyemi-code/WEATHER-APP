import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import DataContext from "./DataContext";

function useOpenStreetMap() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error("useOpenStreetMap must be used inside DataProvider");
  }

  const { location } = context;

  const { latitude, longitude } = location;

  return useQuery({
    queryKey: ["reverseGeocoding"],

    enabled: latitude !== 0 && longitude !== 0,

    queryFn: () =>
      fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
      ).then((res) => res.json()),
  });
}

export default useOpenStreetMap;
