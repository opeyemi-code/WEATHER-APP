import TextButton from "./TextButton";

function SelectDayDropdownMenu() {
  return (
    <div className="absolute bg-(--neutral-800) mt-2 p-1.5 w-[150px] right-1 border border-(--neutral-600) rounded-sm">
      <ul role="listbox" className="text-(--neutral-200) text-sm space-y-2">
        <li>
          <TextButton
            text="Monday"
            role="option"
            className="px-1.5 py-1 bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
        <li>
          <TextButton
            text="Tuesday"
            role="option"
            className="px-1.5 py-1 hover:bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
        <li>
          <TextButton
            text="Wednesday"
            role="option"
            className="px-1.5 py-1 hover:bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
        <li>
          <TextButton
            text="Thursday"
            role="option"
            className="px-1.5 py-1 hover:bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
        <li>
          <TextButton
            text="Friday"
            role="option"
            className="px-1.5 py-1 hover:bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
        <li>
          <TextButton
            text="Saturday"
            role="option"
            className="px-1.5 py-1 hover:bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
        <li>
          <TextButton
            text="Sunday"
            role="option"
            className="px-1.5 py-1 hover:bg-(--neutral-700) w-full rounded-sm text-left"
          />
        </li>
      </ul>
    </div>
  );
}
export default SelectDayDropdownMenu;
