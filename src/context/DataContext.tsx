import { createContext, useState } from "react";
import type { DataContextType, ProviderProps } from "../Types/models";

const DataContext = createContext<DataContextType | null>(null);

export function DataProvider({ children }: ProviderProps) {
  const [isUnitDropdownOpen, setIsUnitDropdownOpen] = useState(false);
  const [isSelectDayDropdownOpen, setIsSelectDayDropdownOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState("Tuesday");

  return (
    <DataContext.Provider
      value={{
        isUnitDropdownOpen,
        setIsUnitDropdownOpen,
        isSelectDayDropdownOpen,
        setIsSelectDayDropdownOpen,
        selectedDay,
        setSelectedDay,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export default DataContext;
