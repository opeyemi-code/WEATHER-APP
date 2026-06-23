import DataContext from "@/context/DataContext";
import { useContext } from "react";

function SearchSuggestions({ searchedResults }) {
  const { setLocation, setLocationInfo, setIsSearchSuggestionOpen } =
    useContext(DataContext)!;

  function getLocation(city) {
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
  }

  return (
    <div
      className={`absolute mt-3 bg-(--neutral-800) w-full p-2 rounded-lg border border-(--neutral-600)`}
    >
      <ul className="text-(--neutral-200) text-sm space-y-3">
        {searchedResults.map((city) => (
          <li
            onMouseDown={() => getLocation(city)}
            key={`${city.latitude}-${city.longitude}`}
            id={city.name}
            className="flex items-center gap-1.5 p-1.5 space-y-1 rounded hover:cursor-pointer hover:bg-(--neutral-700) hover:border border-(--neutral-600)"
          >
            <span>
              <img
                className="rounded-full border"
                src={`https://flagsapi.com/${city.country_code}/flat/24.png`}
                alt={city.name}
              />
            </span>
            {`${city.name}, ${city.country}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchSuggestions;
