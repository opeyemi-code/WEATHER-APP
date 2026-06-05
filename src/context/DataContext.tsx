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

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);

      function success(position: GeolocationPosition) {
        setLocation({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      }
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
