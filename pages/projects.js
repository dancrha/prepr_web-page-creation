import Footer from "@/components/Footer";
import LabCard from "@/components/LabCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import React from "react";

const ProjectsPage = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />

      <div>
        <p className='text-3xl font-semibold flex pl-96 pb-8 pt-12'>
          Prepr Projects
        </p>
      </div>

      <div className='bg-white border rounded-md w-[60%] mx-auto pb-8'>
        <p className='font-semibold pl-8 pt-8 text-xl'>Browse Projects</p>

        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
