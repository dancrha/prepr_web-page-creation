import Image from "next/image";
import React from "react";

const ChallengeCard = () => {
  return (
    <div className='flex justify-center pt-12'>
      <div className='border flex bg-white rounded-md w-[900px] h-[270px] relative hover:shadow-xl hover:scale-105 active:scale-90 transition duration-150'>
        <div className='p-4'>
          <Image
            src='/assets/challenge.png'
            width={200}
            height={300}
            alt='message'
          />
        </div>

        <p className='pt-4 text-gray-700 font-semibold text-2xl'>
          DTP & FUN - Team Business Innovation Challenge
        </p>

        <Image
          className='absolute top-[58px] left-[233px]'
          src='/assets/puzzle.svg'
          width={25}
          height={300}
          alt='puzzle'
        />

        <p className='font-bold text-lg absolute top-14 left-[265px]'>
          Private Challenge <span className='font-extralight'>|</span>{" "}
          <span className='font-normal'>Challenge deadline:</span> 12/01/2023{" "}
          <span className='font-extralight'>|</span>{" "}
          <span className='font-normal'>Total submissions:</span> 0{" "}
          <span className='font-extralight'>|</span>{" "}
          <span className='font-normal'>Status:</span> Open{" "}
          <span className='font-extralight'>|</span>{" "}
          <span className='font-normal'>Duration:</span> None{" "}
          <span className='font-extralight'>|</span>{" "}
          <span className='font-normal'>Level:</span> None
        </p>

        <p className='pt-4 absolute top-[100px] left-[233px] text-sm overflow-auto max-h-[90px]'>
          How might we better support businesses around us? Businesses around
          the world have had to adapt over the last 3 years as the nature of
          sales has diversified and changed, and will need to continue to evolve
          to meet the realities of a post-pandemic world. Challenges abound
          across all aspects of organizations&apos business models, including
          operations, workforce, customer experience and technology, but so do
          opportunities. How might we support the future of different industries
          in terms of solving their challenges? Your team&aposs task is to
          create a new product or service that could be commercially viable and
          sold via B2B (business to business) sales.
        </p>

        <p className='absolute top-[140px] left-[15px]'>
          Hosted by <span className='font-bold'>Prepr</span>{" "}
        </p>

        <p className='p-2 absolute top-[210px] left-[230px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Boundaries
        </p>
        <p className='p-2 absolute top-[210px] left-[320px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Compromise
        </p>
        <p className='p-2 absolute top-[210px] left-[420px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Emotional Intelligence
        </p>
        <p className='p-2 absolute top-[210px] left-[580px] bg-gray-100 border border-gray-300 rounded text-sm'>
          Writing
        </p>
      </div>
    </div>
  );
};

export default ChallengeCard;
