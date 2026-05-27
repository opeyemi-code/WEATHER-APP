import { ChevronDown, Settings } from "lucide-react";

function DropdownMenu() {
  return (
    <div className="flex flex-col items-end">
      {/* Dropdown button */}
      <button
        className="text-white bg-(--neutral-700) px-2 py-1 rounded-sm flex gap-1 items-center text-sm hover:cursor-pointer"
        type="button"
      >
        <span aria-label="hidden">
          <Settings size={14} />
        </span>
        Units
        <span aria-label="hidden">
          <ChevronDown size={14} />
        </span>
      </button>
      {/* Dropdown */}
      <div className="bg-(--neutral-700) hidden p-1 my-2 text-(--neutral-0) text-sm rounded-sm w-43">
        <div>
          <button type="button">Switch to Imperial</button>
          <div className="my-1 border-b border-(--neutral-600)">
            <h6 className="text-(--neutral-300) text-[0.75rem]">Temperature</h6>
            <ul className="p-0.5">
              <li className="bg-(--neutral-800) p-1 rounded-sm">
                Celsius (&#8451;)
              </li>
              <li className="my-1 p-1">Fahrenheit (&#8457;)</li>
            </ul>
          </div>
          <div className="my-1 border-b border-(--neutral-600)">
            <h6 className="text-(--neutral-300) text-[0.75rem]">Wind Speed</h6>
            <ul className="p-0.5">
              <li className="bg-(--neutral-800) p-1 rounded-sm">km/h</li>
              <li className="p-1">mph</li>
            </ul>
          </div>
          <div className="my-1 pb-1">
            <h6 className="text-(--neutral-300) text-[0.75rem]">
              Precipitation
            </h6>
            <ul className="py-0.5">
              <li className="bg-(--neutral-800) p-1 rounded-sm">
                Millimeters (
                <abbr className="no-underline" title="millimeters">
                  mm
                </abbr>
                )
              </li>
              <li className="p-1">
                Inches (
                <abbr className="no-underline" title="inches">
                  in
                </abbr>
                )
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
