import React, { useState } from "react";
import Link from "next/link";
import LabCard from "./LabCard";
import ChallengeCard from "./ChallengeCard";
import ProjectCard from "./ProjectCard";

const MenuBtns = () => {
  const [selectedCategory, setSelectedCategory] = useState("labs");

  // Define your sidebar links
  const sidebarLinks = [
    { label: "Labs", category: "labs" },
    { label: "Challenges", category: "challenges" },
    { label: "Projects", category: "projects" },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='text-black'>
      {/* Sidebar Links */}
      <nav className='flex justify-center gap-12 mt-4 mx-auto text-center hover:cursor-pointer'>
        {sidebarLinks.map((item) => (
          <div
            key={item.label}
            className={`p-4 text-lg font-semibold w-[120px] rounded-full bg-gray-700 text-white border-0 hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150 ${
              selectedCategory === item.category && "bg-blue-500"
            }`}
            onClick={() => handleCategoryClick(item.category)}
          >
            {item.label}
          </div>
        ))}
      </nav>

      {/* Render cards based on selected category */}
      {selectedCategory === "labs" && (
        <>
          <LabCard />
          <LabCard />
          <LabCard />
          <LabCard />
          <LabCard />
        </>
      )}

      {selectedCategory === "challenges" && (
        <>
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
          <ChallengeCard />
        </>
      )}

      {selectedCategory === "projects" && (
        <>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </>
      )}
    </div>
  );
};

export default MenuBtns;
