import { createContext, useEffect, useState } from "react";
import type { DataContextType, ProviderProps } from "../Types/models";

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: ProviderProps) {
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);
  const [isSelectDayDropdownOpen, setIsSelectDayDropdownOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Tuesday");
  const [location, setLocation] = useState({
    longitude: 0,
    latitude: 0,
  });
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isTemperatureUnit, setIsTemperatureUnit] = useState("celsius");
  const [isWindSpeedUnit, setIsWindSpeedUnit] = useState("kmh");
  const [isPrecipitationUnit, setIsPrecipitationUnit] = useState("mm");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, (err) => {
        // Called when user denies or geolocation fails
        setLocationError(err.message || "Location access denied");
      });

      function success(position: GeolocationPosition) {
        setLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      }
    } else {
      setLocationError("Geolocation is not supported by your browser");
    }
  }, []);

  useEffect(() => console.log(location), [location]);

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
        locationError,
        setLocationError,
        isTemperatureUnit,
        setIsTemperatureUnit,
        isWindSpeedUnit,
        setIsWindSpeedUnit,
        isPrecipitationUnit,
        setIsPrecipitationUnit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
