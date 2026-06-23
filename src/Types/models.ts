import type { ReactNode } from "react";

export type ProviderProps = {
  children: ReactNode;
};

type LocationType = {
  longitude: number;
  latitude: number;
};

type LocationInfoType = {
  city: string;
  country: string;
};

export type DataContextType = {
  isUnitDropdownOpen: boolean;
  setIsUnitDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSelectDayDropdownOpen: boolean;
  setIsSelectDayDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedDay: string;
  setSelectedDay: React.Dispatch<React.SetStateAction<string>>;
  location: LocationType;
  setLocation: React.Dispatch<React.SetStateAction<LocationType>>;
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  locationInfo: LocationInfoType;
  setLocationInfo: React.Dispatch<React.SetStateAction<LocationInfoType>>;
  locationError: string | null;
  setLocationError: React.Dispatch<React.SetStateAction<string | null>>;
  isTemperatureUnit: string;
  setIsTemperatureUnit: React.Dispatch<React.SetStateAction<string>>;
  isWindSpeedUnit: string;
  setIsWindSpeedUnit: React.Dispatch<React.SetStateAction<string>>;
  isPrecipitationUnit: string;
  setIsPrecipitationUnit: React.Dispatch<React.SetStateAction<string>>;
  isSearchSuggestionOpen: boolean;
  setIsSearchSuggestionOpen: React.Dispatch<React.SetStateAction<boolean>>;
  searchedInput: string;
  setSearchedInput: React.Dispatch<React.SetStateAction<string>>;
};
