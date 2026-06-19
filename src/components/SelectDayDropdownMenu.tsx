import { forecastDays } from "@/utils/forecastDays";
import TextButton from "./TextButton";

function SelectDayDropdownMenu({ currentDay }: { currentDay: string }) {
  return (
    <div className="absolute bg-(--neutral-800) mt-2 p-1.5 w-37.5 right-1 border border-(--neutral-600) rounded-lg">
      <ul role="listbox" className="text-(--neutral-200) text-sm space-y-2">
        {forecastDays.map((forecastDay) => (
          <li key={forecastDay.id}>
            <TextButton
              text={forecastDay.day}
              role="option"
              className={`${forecastDay.day} ${forecastDay.day === currentDay ? "bg-(--neutral-700)" : ""} px-1.5 py-1 w-full rounded-sm text-left hover:bg-(--neutral-700)`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SelectDayDropdownMenu;
