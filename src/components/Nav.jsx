import { headerLogo } from "../assets/images";
import { hamburger, close } from "../assets/icons";
import { navLinks } from "../constants/index";
import { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="px-14 absolute z-10 w-full">
      <nav className="flex items-center justify-between py-4">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src={headerLogo} alt="headerLogo" width={130} height={29} />
        </a>

        {/* Nav Links (centered only on large screens) */}
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-roboto leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger icon on small screens */}
        <div className="lg:hidden z-20" onClick={toggleMenu}>
          <img
            src={isMenuOpen ? close : hamburger}
            alt="Menu"
            width={25}
            height={25}
            className="cursor-pointer"
          />
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center py-6 gap-4 lg:hidden">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-roboto text-lg text-slate-gray"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
