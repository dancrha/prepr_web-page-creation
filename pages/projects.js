import Footer from "@/components/Footer";
import LabCard from "@/components/LabCard";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProjectsPage = () => {
  const router = useRouter();
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
        <div className='flex justify-end mr-4'>
          <button
            onClick={() => router.push("/newproject")}
            className='border flex gap-2 text-gray-700 bg-green-500 rounded-md shadow-md p-2 hover:scale-105 transition'
          >
            <Image
              src='/assets/add2.png'
              width={20}
              height={20}
              alt='trophy'
              className='mt-0.5'
            />
            New Project
          </button>
        </div>

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
