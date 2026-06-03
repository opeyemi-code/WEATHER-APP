import { ChevronDown, Settings } from "lucide-react";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import Dropdown from "./Dropdown";

function DropdownMenu() {
  const { isUnitDropdownOpen, setIsUnitDropdownOpen } =
    useContext(DataContext)!;

  return (
    <div className="flex flex-col items-end relative">
      {/* Dropdown button */}
      <button
        role="menu"
        className="text-white bg-(--neutral-700) px-2 py-1 rounded-sm flex gap-1 items-center text-sm hover:cursor-pointer"
        onClick={() => setIsUnitDropdownOpen(!isUnitDropdownOpen)}
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
      {isUnitDropdownOpen && <Dropdown />}
    </div>
  );
}

export default DropdownMenu;
