import { Search } from "lucide-react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center my-15 mx-auto lg:w-[70%]">
      <h1 className="font-bricolage text-(--neutral-0) text-6xl text-center">
        How's the sky looking today?
      </h1>
      <form className="flex flex-col md:flex-row justify-center items-center mt-12 gap-3 w-full md:w-[80%]">
        <label className="relative w-full" htmlFor="search-box">
          <input
            className="bg-(--neutral-700) block w-full placeholder:text-(--neutral-300) text-sm pl-9 py-3.5 rounded-lg grow focus:outline-(--neutral-0) focus:outline-1"
            type="text"
            name="search"
            id="search-box"
            placeholder="Search for a place..."
          />
          <Search
            size={16}
            className="absolute top-4.5 left-3 text-(--neutral-300)"
          />
        </label>
        <button
          className="bg-(--blue-500) block font-medium text-(--neutral-200) px-3 py-2.5 rounded-lg w-full shrink-3 hover:cursor-pointer focus:outline-none"
          type="button"
        >
          Search
        </button>
      </form>
    </section>
  );
}

export default Hero;
