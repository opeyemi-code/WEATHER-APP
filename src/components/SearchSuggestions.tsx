import DataContext from "@/context/DataContext";
import type { GeocodingResult, SearchedResults } from "@/Types/models";
import { useContext } from "react";
import SearchedresultsLoadingState from "./SearchedresultsLoadingState";
import GpsLocation from "./GpsLocation";

function SearchSuggestions({
  searchedResults,
  isLoading,
}: {
  searchedResults: SearchedResults;
  isLoading: boolean;
}) {
  const {
    searchedInput,
    setSearchedInput,
    setLocation,
    setLocationInfo,
    setIsSearchSuggestionOpen,
    isSearchFocused,
    setIsSearchError,
  } = useContext(DataContext)!;

  function getLocation(city: GeocodingResult) {
    const newLocation = {
      longitude: city.longitude,
      latitude: city.latitude,
    };

    setLocation(newLocation);
    setLocationInfo({
      city: city.name,
      country: city.country,
    });

    setIsSearchSuggestionOpen(false);
    setIsSearchError(false);
    setSearchedInput("");
  }

  return (
    <div className="absolute mt-3 bg-(--neutral-800) w-full p-2 rounded-lg border border-(--neutral-600)">
      {searchedInput.length === 0 ? (
        isSearchFocused && <GpsLocation />
      ) : isLoading ? (
        <SearchedresultsLoadingState />
      ) : (
        <ul className="text-(--neutral-200) text-sm space-y-3 h-40 overflow-y-scroll">
          {searchedResults.map((city) => (
            <li
              key={`${city.latitude}-${city.longitude}`}
              onMouseDown={() => getLocation(city)}
              className="flex items-center gap-1.5 p-1.5 rounded hover:bg-(--neutral-700)"
            >
              <img
                className="rounded-full border"
                src={`https://flagsapi.com/${city.country_code}/flat/24.png`}
                alt={city.name}
              />
              {city.name}, {city.country}
            </li>
          ))}
        </ul>
      )}{" "}
    </div>
  );
}
export default SearchSuggestions;
