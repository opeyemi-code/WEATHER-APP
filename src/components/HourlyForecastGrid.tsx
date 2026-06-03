import { ChevronDown } from "lucide-react";
import HourlyForecastCard from "./HourlyForecastCard";
import weatherImg from "../assets/images/icon-partly-cloudy.webp";
import SelectDayDropdownMenu from "./SelectDayDropdownMenu";
import { useContext } from "react";
import DataContext from "../context/DataContext";

function HourlyForecastGrid() {
  const { isSelectDayDropdownOpen, setIsSelectDayDropdownOpen } =
    useContext(DataContext)!;

  return (
    <section className="bg-(--neutral-800) p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-(--neutral-0) font-medium text-lg">
          Hourly forecast
        </h2>

        {/* Select Day Dropdown Menu */}
        <div className="relative">
          <button
            onClick={() => setIsSelectDayDropdownOpen(!isSelectDayDropdownOpen)}
            className="flex items-center gap-1 text-(--neutral-200) bg-(--neutral-600) px-3 py-1.5 rounded-lg hover:cursor-pointer"
            type="button"
          >
            Tuesday{" "}
            <span>
              <ChevronDown />
            </span>
          </button>

          {/* Select Day Dropdown */}
          {isSelectDayDropdownOpen && <SelectDayDropdownMenu />}
        </div>
      </div>

      {/* Hourly forecast list */}

      <ul className="space-y-3 mt-4">
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
        <HourlyForecastCard
          weatherIcon={weatherImg}
          hour="3 PM"
          deg="68&deg;"
        />
      </ul>
    </section>
  );
}

export default HourlyForecastGrid;
