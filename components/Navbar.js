import React from "react"; // Don't forget to import React
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {/* Map over the navLinks array */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'></div>
      </nav>
    </header>
  );
};

export default Nav;
