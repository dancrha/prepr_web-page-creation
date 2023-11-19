import React from "react";

const Footer = () => {
  return (
    <div className='w-full bg-gray-700 mt-12'>
      <div className='px-8 py-10 flex justify-between mx-auto'>
        <div>
          <p className='text-white'>v24.0.6</p>
        </div>
        <div className='flex gap-4 text-white justify-between'>
          <p>Privacy policy </p>
          <p>Terms of use </p>
          <p>Help Center</p>
        </div>
        <div>
          <p className='text-white'>
            Powered by <span className='font-semibold'>LearnLab.ai</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
