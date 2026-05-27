import logo from "../assets/images/logo.svg";
import DropdownMenu from "./DropdownMenu";

function Header() {
  return (
    <header className="flex justify-between">
      {/* logo */}
      <div>
        <img className="w-32" src={logo} alt="Logo" />
      </div>

      {/* Dropdown Menu */}
      <DropdownMenu />
    </header>
  );
}

export default Header;
