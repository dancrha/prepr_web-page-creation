import Footer from "@/components/Footer";
import LabCard from "@/components/LabCard";
import Navbar from "@/components/Navbar";
import React from "react";

const LabsPage = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />

      <div>
        <p className='text-3xl font-semibold flex pl-96 pb-8 pt-12'>
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
