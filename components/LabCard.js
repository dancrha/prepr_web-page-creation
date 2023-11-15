import Image from "next/image";
import React from "react";
import { BeakerIcon } from "@heroicons/react/24/solid";

const LabCard = () => {
  return (
    <div className='flex justify-center pt-12 '>
      <div className='border flex bg-white border-gray-800 w-[900px] h-[270px] relative hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150'>
        <div className='p-4'>
          <Image
            src='/assets/lab1.png'
            width={200}
            height={300}
            alt='message'
          />
        </div>

        <p className='pt-4 text-gray-700 font-semibold text-2xl'>
          Prepr CARE Lab
        </p>

        <button className='absolute top-4 right-4 bg-gray-700 text-white rounded p-1 pr-2 text-lg hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150'>
          + Follow
        </button>

        <BeakerIcon className='h-6 w-6 absolute top-[58px] left-[233px] text-blue-500' />
        <p className='font-bold text-lg absolute top-14 left-[265px]'>
          Public Lab | <span className='font-normal'>Last Update:</span> 1 hour
          ago | <span className='font-normal'>Members:</span> 0 |{" "}
          <span className='font-normal'>Duration:</span> None |{" "}
          <span className='font-normal'>Level:</span> None
        </p>

        <p className='pt-4 absolute top-[100px] left-[233px] text-sm overflow-auto max-h-[90px]'>
          Welcome to the CARE Lab, a space to collaborate and communicate ideas,
          resources, best practices, and awareness to help manage stress,
          relieve anxiety, and carry our collective burdens together.
          Participants are invited to share stories and resources while creating
          a safe space for everyone to share and learn from each other.
          Contributors are invited to host events and webinars that can be made
          accessible through the CARE Lab resources section.
        </p>

        <p className='absolute top-[170px] left-[20px]'>
          Hosted by <span className='font-bold'>Prepr</span>{" "}
        </p>

        <p className='p-2 absolute top-[200px] left-[230px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Boundaries
        </p>
        <p className='p-2 absolute top-[200px] left-[320px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Compromise
        </p>
        <p className='p-2 absolute top-[200px] left-[420px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Emotional Intelligence
        </p>
        <p className='p-2 absolute top-[200px] left-[580px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Writing
        </p>
      </div>
    </div>
  );
};

export default LabCard;
