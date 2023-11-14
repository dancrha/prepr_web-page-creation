"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const LandingHero = () => {
  return (
    <div>
      <Navbar />
      <div className='text-gray-700 font-bold py-36 text-center space-y-5'>
        <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
          <h1 className='text-gray-700'>Explore Your Interests</h1>
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
        <div className='text-sm md:text-xl font-light text-zinc-400'>
          Get rewarding hands-on experience.
        </div>
        <div>
          <Link href={"/first-post"}>
            <button
              variant='premium'
              className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
            >
              Start Generating for free
            </button>
          </Link>
        </div>
        <div className='text-zinc-400 text-xs md:Ltext-sm font-normal'>
          No credit card required.
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
