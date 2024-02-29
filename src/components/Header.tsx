import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar } from '.';



const Header = () => {

    return (
      <header className=" sticky top-0 z-1 mx-auto flex w-full max-w-7xl p-4 sm:p-6 lg:px-8 flex-wrap items-center justify-between">
        <NavLink to="/">
          <h1>Justin Gebert</h1>
        </NavLink>
        <Navbar />
      </header>
    );
};

export default Header;