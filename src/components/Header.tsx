import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '.';



const Header = () => {

    return (
      <header className=" sticky top-0 z-20 mx-auto flex w-full items-center justify-between">
        <NavLink to="/">
          <h1>Justin Gebert</h1>
        </NavLink>
        <Navbar />
      </header>
    );
};

export default Header;