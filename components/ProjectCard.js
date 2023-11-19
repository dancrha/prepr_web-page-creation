import Image from "next/image";
import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const ProjectCard = () => {
  return (
    <div className='flex justify-center pt-12'>
      <div className='border flex bg-white rounded-md w-[900px] h-[270px] relative hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150'>
        <div className='p-4'>
          <Image
            src='/assets/projectpic.png'
            width={200}
            height={300}
            alt='message'
          />
        </div>

        <p className='pt-4 text-gray-700 font-semibold text-2xl w-[80%]'>
          user123 - Frontend Developer Challenge 3: Dashboard and Project
          Creation
        </p>

        <div className='flex mt-8'>
          <p className='font-semibold text-lg absolute top-[90px] left-[233px]'>
            Overview
          </p>
        </div>
        <p className='mt-10 w-[70%] absolute top-[80px] left-[233px] text-sm overflow-auto max-h-[90px]'>
          A web dashboard is a reporting interface that allows you to monitor
          your website performance by tracking metrics like visitors, page
          views, and online conversions. It may be used in many different
          contexts such as digital marketing, social media, SEO, UX, and
          eCommerce. Each of these use-cases brings a different perspective to
          website performance.
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
