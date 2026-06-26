import { Search } from "lucide-react";
import SearchSuggestions from "./SearchSuggestions";
import { useContext } from "react";
import DataContext from "@/context/DataContext";
import useGeocoding from "@/context/UseGeocoding";

function Hero() {
  const { data: geocoding, isLoading } = useGeocoding();
  const {
    searchedInput,
    setSearchedInput,
    setCity,
    isSearchSuggestionOpen,
    setIsSearchSuggestionOpen,
    setIsSearchFocused,
    setIsSearchError,
  } = useContext(DataContext)!;

  const filteredSearch =
    geocoding?.results?.filter((search) =>
      search.name.toLowerCase().includes(searchedInput.trim().toLowerCase()),
    ) ?? [];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.trim();

    if (value.length >= 0) {
      setSearchedInput(value);

      setIsSearchSuggestionOpen(value.trim().length >= 0);
    }
  }

  function handleBlur() {
    setTimeout(() => {
      setIsSearchSuggestionOpen(false);
      setIsSearchFocused(false);
    }, 150);
  }

  function handleSearchButton() {
    if (searchedInput && filteredSearch.length >= 1) {
      setCity(searchedInput);
      setSearchedInput("");
      setIsSearchError(false);
    } else {
      setIsSearchError(
        searchedInput.length >= 3 && !isLoading && filteredSearch.length === 0,
      );
    }
  }

  return (
    <section className="flex flex-col items-center justify-center my-15 mx-auto lg:w-[70%]">
      <h1 className="font-bricolage text-(--neutral-0) text-6xl text-center">
        How's the sky looking today?
      </h1>
      <form className="flex flex-col md:flex-row justify-center items-center mt-12 gap-3 w-full md:w-[80%]">
        <label className="relative w-full" htmlFor="search-box">
          <input
            onChange={handleChange}
            onFocus={() => {
              setIsSearchSuggestionOpen(true);
              setIsSearchFocused(true);
            }}
            onBlur={handleBlur}
            className="bg-(--neutral-700) text-(--neutral-0) block w-full placeholder:text-(--neutral-300) text-sm pl-9 py-3.5 rounded-lg grow focus:outline-(--neutral-0) focus:outline-1"
            value={searchedInput}
            type="text"
            name="search"
            id="search-box"
            placeholder="Search for a place..."
          />
          <Search
            size={16}
            className="absolute top-4.5 left-3 text-(--neutral-300)"
          />
          {isSearchSuggestionOpen && (
            <SearchSuggestions
              searchedResults={filteredSearch}
              isLoading={isLoading}
            />
          )}
        </label>
        <button
          className="bg-(--blue-500) block font-medium text-(--neutral-200) px-3 py-2.5 rounded-lg w-full shrink-3 hover:cursor-pointer focus:outline-none"
          type="button"
          onClick={handleSearchButton}
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;
