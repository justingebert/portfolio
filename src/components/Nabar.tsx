import React, { useState } from "react";
import navLinks, { NavLink } from "../data/navLinks";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");

  return (
    <nav className=" px-7 w-full flex items-center py-5 fixed top-0 z-20">
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/">
          <h1>Justin Gebert</h1> {/* add iamge here */}
        </Link>
        <ul className=' hidden sm:flex flex-row gap-10'>
          {navLinks.map((link: NavLink) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
                        hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={link.id}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
