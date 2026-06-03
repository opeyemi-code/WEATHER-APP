function Dropdown() {
  return (
    <div className="absolute z-10 top-8 bg-(--neutral-800) p-2 my-2 text-(--neutral-0) text-sm rounded-sm w-43">
      <div>
        <button type="button" className="w-full text-left">
          Switch to Imperial
        </button>

        <div className="my-1 border-b border-(--neutral-600)">
          <h6 className="text-(--neutral-300) text-[0.75rem]">Temperature</h6>
          <ul className="py-1">
            <li>
              <button
                type="button"
                role="menuitem"
                className="w-full text-left bg-(--neutral-700) px-2 py-1 rounded-sm"
              >
                Celsius (&#8451;)
              </button>
            </li>
            <li>
              <button
                type="button"
                role="menuitem"
                className="w-full text-left my-1 p-1"
              >
                Fahrenheit (&#8457;)
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
                type="button"
                role="menuitem"
                className="w-full text-left bg-(--neutral-700) px-2 py-1 rounded-sm"
              >
                km/h
              </button>
            </li>
            <li>
              <button
                type="button"
                role="menuitem"
                className="w-full text-left p-1"
              >
                mph
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
                type="button"
                role="menuitem"
                className="w-full text-left bg-(--neutral-700) px-2 py-1 rounded-sm"
              >
                Millimeters (
                <abbr className="no-underline" title="millimeters">
                  mm
                </abbr>
                )
              </button>
            </li>
            <li>
              <button
                type="button"
                role="menuitem"
                className="w-full text-left p-1"
              >
                Inches (
                <abbr className="no-underline" title="inches">
                  in
                </abbr>
                )
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
