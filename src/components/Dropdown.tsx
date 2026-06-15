import DataContext from "@/context/DataContext";
import { Check } from "lucide-react";
import { useContext, useState } from "react";

function Dropdown() {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const [isFahrenheit, setIsFahrenheit] = useState<boolean>(false);
  const [isKilometerPerHour, setIsKilometerPerHour] = useState<boolean>(true);
  const [isMilesPerHour, setIsMilesPerHour] = useState<boolean>(false);
  const [isMillimeters, setIsMillimeters] = useState<boolean>(true);
  const [isInches, setIsInches] = useState<boolean>(false);
  const { setIsTemperatureUnit, setIsWindSpeedUnit, setIsPrecipitationUnit } =
    useContext(DataContext)!;

  function toggleTemperatureUnit(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.className.includes("celsius")) {
      setIsTemperatureUnit("celsius");
      setIsCelsius(true);
      setIsFahrenheit(false);
    } else {
      setIsTemperatureUnit("fahrenheit");
      setIsCelsius(false);
      setIsFahrenheit(true);
    }
  }

  function toggleWindSpeedUnit(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.className.includes("kilometer-per-hour")) {
      setIsWindSpeedUnit("kmh");
      setIsKilometerPerHour(true);
      setIsMilesPerHour(false);
    } else {
      setIsWindSpeedUnit("mph");
      setIsKilometerPerHour(false);
      setIsMilesPerHour(true);
    }
  }

  function togglePrecipitationUnit(e: React.MouseEvent<HTMLButtonElement>) {
    if (e.currentTarget.className.includes("millimeters")) {
      setIsPrecipitationUnit("mm");
      setIsMillimeters(true);
      setIsInches(false);
    } else {
      setIsPrecipitationUnit("inch");
      setIsMillimeters(false);
      setIsInches(true);
    }
  }

  return (
    <div className="absolute z-10 top-8 bg-(--neutral-800) p-2 my-2 text-(--neutral-0) text-sm rounded-lg w-50 border border-(--neutral-600)">
      <div>
        <button type="button" className="w-full text-left">
          Switch to Imperial
        </button>

        <div className="mt-3 mb-1 border-b border-(--neutral-600)">
          <h6 className="text-(--neutral-300) text-[0.75rem]">Temperature</h6>
          <ul className="py-1">
            <li>
              <button
                onClick={(e) => toggleTemperatureUnit(e)}
                type="button"
                role="menuitem"
                className={`${isCelsius ? "bg-(--neutral-700)" : ""} celsius w-full flex justify-between items-center text-left px-2 py-1 rounded-sm hover:cursor-pointer`}
              >
                <span>
                  Celsius <span arial-hidden="true">(&#8451;)</span>
                </span>
                <Check
                  className={`${!isCelsius ? "hidden" : "block"}`}
                  size={15}
                  arial-hidden="true"
                />
              </button>
            </li>
            <li>
              <button
                onClick={(e) => toggleTemperatureUnit(e)}
                type="button"
                role="menuitem"
                className={`${isFahrenheit ? "bg-(--neutral-700)" : ""} fahrenheit w-full text-left my-1 px-2 p-1 flex justify-between items-center rounded-sm hover:cursor-pointer`}
              >
                <span>
                  Fahrenheit <span aria-hidden="true"> (&#8457;)</span>
                </span>
                <Check
                  className={`${!isFahrenheit ? "hidden" : "block"}`}
                  size={15}
                  arial-hidden="true"
                />
              </button>
            </li>
          </ul>
        </div>

        <div className="my-1 border-b border-(--neutral-600)">
          <h6 className="mt-2 text-(--neutral-300) text-[0.75rem]">
            Wind Speed
          </h6>
          <ul className="py-1">
            <li>
              <button
                onClick={(e) => toggleWindSpeedUnit(e)}
                type="button"
                role="menuitem"
                className={`${isKilometerPerHour ? "bg-(--neutral-700)" : ""} kilometer-per-hour w-full text-left px-2 py-1 rounded-sm flex justify-between items-center hover:cursor-pointer`}
              >
                km/h
                <Check
                  className={`${!isKilometerPerHour ? "hidden" : "block"}`}
                  size={15}
                  arial-hidden="ture"
                />
              </button>
            </li>
            <li>
              <button
                onClick={(e) => toggleWindSpeedUnit(e)}
                type="button"
                role="menuitem"
                className={`${isMilesPerHour ? "bg-(--neutral-700)" : ""} miles-per-hour w-full text-left px-2 p-1 flex justify-between items-center hover:cursor-pointer`}
              >
                mph
                <Check
                  className={`${!isMilesPerHour ? "hidden" : "block"}`}
                  size={15}
                  arial-hidden="true"
                />
              </button>
            </li>
          </ul>
        </div>

        <div className="my-1">
          <h6 className="mt-2 text-(--neutral-300) text-[0.75rem]">
            Precipitation
          </h6>
          <ul className="py-1">
            <li>
              <button
                onClick={(e) => togglePrecipitationUnit(e)}
                type="button"
                role="menuitem"
                className={`${isMillimeters ? "bg-(--neutral-700)" : ""} millimeters w-full text-left px-2 py-1 rounded-sm flex justify-between items-center hover:cursor-pointer`}
              >
                <span>
                  Millimeters (
                  <abbr className="no-underline" title="millimeters">
                    mm
                  </abbr>
                  )
                </span>
                <Check
                  className={`${!isMillimeters ? "hidden" : "block"}`}
                  size={15}
                  arial-hidden="true"
                />
              </button>
            </li>
            <li>
              <button
                onClick={(e) => togglePrecipitationUnit(e)}
                type="button"
                role="menuitem"
                className={`${isInches ? "bg-(--neutral-700)" : ""} inches w-full text-left px-2 p-1 flex justify-between items-center hover:cursor-pointer`}
              >
                <span>
                  {" "}
                  Inches (
                  <abbr className="no-underline" title="inches">
                    in
                  </abbr>
                  )
                </span>
                <Check
                  className={`${!isInches ? "hidden" : "block"}`}
                  size={15}
                  arial-hidden="true"
                />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
