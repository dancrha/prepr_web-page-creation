import React from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  // Define your sidebar links
  const sidebarLinks = [
    { label: "Labs", href: "/labs" },
    { label: "Challenges", href: "/challenges" },
    { label: "Projects", href: "/projects" },
  ];

  return (
    <div className=' text-black'>
      {/* Sidebar Links */}
      <nav className='flex justify-center gap-12 mt-4 mx-auto text-center'>
        {sidebarLinks.map((item) => (
          <Link key={item.label} href={item.href}>
            <div className=' p-4 text-lg font-semibold w-[120px] rounded-full bg-gray-700 text-white border-0 hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150 '>
              {item.label}
            </div>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
