import { createContext, useEffect, useState } from "react";
import type { DataContextType, ProviderProps } from "../Types/models";
import { useQuery } from "@tanstack/react-query";

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: ProviderProps) {
  // const { data: geocoding } = useGeocoding;
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);
  const [isSelectDayDropdownOpen, setIsSelectDayDropdownOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Tuesday");
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [city, setCity] = useState("berlin");
  const [locationInfo, setLocationInfo] = useState({
    city: "",
    country: "",
  });
  const [searchedInput, setSearchedInput] = useState("");
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isTemperatureUnit, setIsTemperatureUnit] = useState("celsius");
  const [isWindSpeedUnit, setIsWindSpeedUnit] = useState("kmh");
  const [isPrecipitationUnit, setIsPrecipitationUnit] = useState("mm");
  const [isSearchSuggestionOpen, setIsSearchSuggestionOpen] = useState(false);

  const geocodingQuery = useQuery({
    queryKey: ["geocoding", city],
    queryFn: () =>
      fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`,
      ).then((res) => res.json()),
    enabled: city.trim().length > 0,
  });

  useEffect(() => {
    if (geocodingQuery.data?.results?.length) {
      setLocation({
        latitude: geocodingQuery.data.results[0].latitude,
        longitude: geocodingQuery.data.results[0].longitude,
      });
      setLocationInfo({
        city: geocodingQuery.data.results[0].name,
        country: geocodingQuery.data.results[0].country,
      });
    }
  }, [geocodingQuery.data, city]);

  // useEffect(() => console.log(locationInfo));

  return (
    <DataContext.Provider
      value={{
        isUnitDropdownOpen,
        setIsUnitDropdownOpen,
        isSelectDayDropdownOpen,
        setIsSelectDayDropdownOpen,
        selectedDay,
        setSelectedDay,
        location,
        setLocation,
        city,
        setCity,
        locationInfo,
        setLocationInfo,
        locationError,
        setLocationError,
        isTemperatureUnit,
        setIsTemperatureUnit,
        isWindSpeedUnit,
        setIsWindSpeedUnit,
        isPrecipitationUnit,
        setIsPrecipitationUnit,
        isSearchSuggestionOpen,
        setIsSearchSuggestionOpen,
        searchedInput,
        setSearchedInput,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
