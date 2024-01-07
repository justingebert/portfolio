import React, { useState } from "react";
import navLinks, { NavLink } from "../data/navLinks";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");

  return (
    <nav>
      <div>
        <Link to="/">
          <h1>Portfolio</h1> {/* add iamge here */}
        </Link>
        <ul>
          {navLinks.map((link: NavLink) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              }
                        hover:text-white text-[18px] font-medium cursor-pointer`}
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
