import type { ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

export type DataContextType = {
  isUnitDropdownOpen: boolean;
  setIsUnitDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectDayDropdownOpen: boolean;
  setIsSelectDayDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
};
