import React from "react";

const Footer = () => {
  return (
    <div className='px-8 py-10 flex justify-between mx-auto'>
      <div>
        <p>v24.0.6</p>
      </div>
      <div className='flex mx-auto gap-4'>
        <p>Privacy policy </p>
        <p>Terms of use </p>
        <p>Help Center</p>
      </div>
      <div>
        <p>
          Powered by <span className='font-semibold'>LearnLab.ai</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
