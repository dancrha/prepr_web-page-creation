import React, { useState } from "react";
import { navLinks } from "../constants";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`py-4 px-8 sticky z-10 w-full ${
        darkMode ? "bg-gray-700 text-white" : ""
      }`}
    >
      <nav className='flex max-container items-center'>
        {/* Dark Mode Button */}

        <Image
          src='/assets/preprlogo.png'
          width={130}
          height={130}
          alt='preprlabs logo'
        />

        <ul className='pl-80 flex mx-auto pt-3 gap-16'>
          {/* Map over the navLinks array */}
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat font-semibold leading-normal text-lg text-slate-gray'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleDarkMode}
          className={`mr-4 p-2 rounded-md shadow-md hover:scale-105 transition ${
            darkMode ? "bg-white text-black" : "bg-gray-700 text-white"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
        {/* Notification, Message, Help icons */}
        <ul className='flex gap-4 hover:cursor-pointer'>
          <Image
            src={
              darkMode
                ? "/assets/notificationdark.png"
                : "/assets/notification.png"
            }
            width={30}
            height={30}
            alt={darkMode ? "notification-dark" : "notification"}
          />

          <Image
            src={darkMode ? "/assets/messagedark.png" : "/assets/message.png"}
            width={30}
            height={30}
            alt={darkMode ? "message-dark" : "message"}
          />

          <Image
            src={darkMode ? "/assets/helpdark.png" : "/assets/help.png"}
            width={30}
            height={30}
            alt={darkMode ? "help-dark" : "help"}
          />
        </ul>

        {/* Search input */}
        <li
          className={`list-none pl-4 ${
            darkMode ? "text-black" : "text-gray-700"
          }`}
        >
          <input
            type='text'
            placeholder='Search...'
            className='border border-gray-300 px-2 py-1 rounded'
          />
        </li>

        {/* Profile icon */}
        <ul className='pl-4 hover:cursor-pointer'>
          <Image
            src={darkMode ? "/assets/profiledark.png" : "/assets/profile.png"}
            width={30}
            height={30}
            alt={darkMode ? "message-dark" : "message"}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
