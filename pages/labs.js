import Footer from "@/components/Footer";
import LabCard from "@/components/LabCard";
import Navbar from "@/components/Navbar";
import { useTheme } from "@/context/ThemeContext";
import React from "react";

const LabsPage = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <div
      className={`${darkMode ? "bg-gray-700  " : "bg-gray-100 text-gray-700"}`}
    >
      <Navbar />

      <div>
        <p
          className={`text-3xl font-semibold flex pl-96 pb-8 pt-12 ${
            darkMode ? "text-white" : "text-gray-700"
          }`}
        >
          Prepr Labs
        </p>
      </div>

      <div className='bg-white border rounded-md w-[60%] mx-auto pb-8'>
        <p className='font-semibold pl-8 pt-8 text-xl'>Browse Labs</p>

        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
        <LabCard />
      </div>
      <Footer />
    </div>
  );
};

export default LabsPage;
