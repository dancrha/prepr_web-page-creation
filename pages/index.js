"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MenuBtns from "@/components/MenuBtns";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import LabCard from "@/components/LabCard";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

const LandingHero = () => {
  const handleStartLearningClick = () => {
    // Scroll to the end of the screen
    window.scrollTo(0, 1000);
  };
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className={`bg-${darkMode ? "gray-700" : "gray-100"}`}>
      <Navbar />
      <div className='text-gray-700 font-bold py-36 text-center space-y-5 h-screen'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
          <Image
            className='mx-auto mb-12'
            src='/assets/preprlogo.png'
            width={300}
            height={300}
            alt='message'
          />
          <h1
            className={`${
              darkMode ? "text-white" : "text-gray-700"
            } font-extrabold`}
          >
            Explore Your Interests
          </h1>

          <div className='text-transparent bg-clip-text bg-gradient-to-r pb-5 from-blue-500  to-green-500'>
            <TypewriterComponent
              options={{
                strings: [
                  "Engaging Labs.",
                  "Fun Challenges.",
                  "Exciting Projects.",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className='text-sm md:text-xl font-light text-zinc-400 '>
          Get rewarding hands-on experience.
        </div>
        <div>
          <button
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-green-500 text-white border-0 hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150'
            onClick={handleStartLearningClick}
          >
            Start Learning
          </button>
        </div>
      </div>

      <div
        className={`${
          darkMode ? "text-white" : "text-black"
        } flex justify-center mb-10 font-semibold text-3xl`}
      >
        <p>Recommended content based on your interests & skills</p>
      </div>
      <SearchBar />
      <MenuBtns />

      <Footer />
    </div>
  );
};

export default LandingHero;
