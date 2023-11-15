import React from "react"; // Don't forget to import React
import { navLinks } from "../constants";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='py-4 px-8 sticky z-10 w-full'>
      <nav className='flex max-container items-center'>
        <Image
          src='/assets/logo.png'
          width={130}
          height={130}
          alt='preprlabs logo'
        />

        <ul className='pl-10 flex mx-auto pt-3 gap-16'>
          <div className='pl-20'></div>
          <p className=''></p>
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
        <ul className='flex gap-4 '>
          <Image
            src='/assets/notification.png'
            width={30}
            height={30}
            alt='notification'
          />
          <Image
            src='/assets/message.png'
            width={30}
            height={30}
            alt='message'
          />
          <Image src='/assets/help.png' width={30} height={30} alt='help' />
        </ul>
        <li className='list-none pl-4'>
          <input
            type='text'
            placeholder='Search...'
            className='border border-gray-300 px-2 py-1 rounded'
          />
        </li>
        <ul className='pl-4'>
          <Image
            src='/assets/profile.png'
            width={30}
            height={30}
            alt='message'
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
