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
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useState } from "react";
import Draggable from "react-draggable";
import { Switch } from "@tremor/react";

const LandingHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [narratorEnabled, setNarratorEnabled] = useState(false);
  const [adhdFriendlyEnabled, setAdhdFriendlyEnabled] = useState(false);
  const [invertColorsEnabled, setInvertColorsEnabled] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");

  const handleResetSettings = () => {
    setSearchBarValue("");
    setSelectedLanguage("");
    setNarratorEnabled(false);
    setAdhdFriendlyEnabled(false);
    setInvertColorsEnabled(false);
  };

  const handleStartLearningClick = () => {
    // Scroll to the end of the screen
    window.scrollTo(0, 1000);
  };
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div className={`bg-${darkMode ? "gray-700" : "gray-100"}`}>
      <Navbar />
      <div>
        <button
          className='fixed mr-0 right-0 transform translate-y-1/2 z-50 bg-blue-200 p-2 rounded-full shadow-sm'
          onClick={() => setIsOpen(true)}
        >
          <Image
            className='mx-auto'
            src='/assets/acc.png'
            width={30}
            height={300}
            alt='message'
          />
        </button>

        {isOpen && (
          <Draggable>
            <div className='fixed mr-14 right-0 transform translate-y-1/2 z-50 bg-blue-300 border rounded-lg w-[400px] h-[450px] p-8'>
              <div className='flex justify-center font-semibold'>
                Accessibility Settings
              </div>
              <div>
                <input
                  type='text'
                  id='myInput'
                  placeholder='Search...'
                  className='p-2 rounded-md mt-4 hover:scale-105 transition'
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e.target.value)}
                ></input>
                <select
                  id='userType'
                  name='userType'
                  className='border p-4 mb-4 mt-4 rounded-md text-black hover:scale-105 transition'
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  value={selectedLanguage}
                >
                  <option value=''>Change Language</option>
                  <option value='en'>English</option>
                  <option value='es'>Spanish</option>
                  <option value='fr'>French</option>
                  <option value='de'>German</option>
                  <option value='it'>Italian</option>
                  <option value='jp'>Japanese</option>
                </select>

                <p>Narrarator</p>
                <Switch
                  id='switch'
                  name='switch'
                  checked={narratorEnabled}
                  onChange={() => setNarratorEnabled(!narratorEnabled)}
                />

                <p className='pt-4'>ADHD Friendly</p>
                <Switch
                  id='switch'
                  name='switch'
                  checked={adhdFriendlyEnabled}
                  onChange={() => setAdhdFriendlyEnabled(!adhdFriendlyEnabled)}
                />
                <p className='pt-4'>Invert Colours</p>
                <Switch
                  id='switch'
                  name='switch'
                  checked={invertColorsEnabled}
                  onChange={() => setInvertColorsEnabled(!invertColorsEnabled)}
                />
              </div>
              <div className='flex justify-between'>
                <button
                  onClick={handleResetSettings}
                  className='p-2 rounded bg-red-400 text-white self-end hover:scale-105 transition active:scale-95 duration-150'
                >
                  Reset Settings
                </button>
                <button
                  className='mt-4 p-2 rounded bg-blue-500 text-white self-end hover:scale-105 transition active:scale-95 duration-150'
                  onClick={() => setIsOpen(false)}
                >
                  Close Window
                </button>
              </div>
            </div>
          </Draggable>
        )}
      </div>
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
