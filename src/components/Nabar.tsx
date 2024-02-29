import React, { useState } from "react";
import navLinks, { NavLinkType } from "../data/navLinks";
import { NavLink } from "react-router-dom";
import menu from "../assets/icons/menu-50x50-black.png";
import close from "../assets/icons/closemenu-50x50-black.png";




const Navbar: React.FC = () => {
  const [activePage, setActivePage] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const NavLinks = () => {
    return (
      <>
        {navLinks.map((link: NavLinkType) => (
          <NavLink 
            key={link.id} 
            to={link.id} 
            className={({ isActive }) => 
              `${isActive ? "text-red-500" : "text-black"} hover:text-white text-[18px] font-medium cursor-pointer`
            }
            onClick={() => setActivePage(link.title)}
          >
            {link.title}
          </NavLink>
        ))}
        </>
    );
  };

  return (
    <>
      <nav className="flex justify-end">
        <div className="hidden w-full justify-between sm:flex space-x-4">
          <NavLinks />
        </div>
        <div className="sm:hidden mx-4 ">
          <img
            src={menuOpen ? close : menu}
            alt="menu"
            className="w-[20px] cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
      </nav>
      {menuOpen && (
        <div className="sm:hidden flex basis-full flex-col items-left my-4">
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default Navbar;
