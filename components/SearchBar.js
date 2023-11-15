import React from "react";

const SearchBar = () => {
  return (
    <div className='flex justify-center items-center pb-4 '>
      <li className='list-none hover:shadow-xl hover:scale-105 active:scale-90 transition duration-100'>
        <input
          type='text'
          placeholder='Search skills...'
          className='border border-gray-300 p-4 rounded w-[800px]'
        />
      </li>
    </div>
  );
};

export default SearchBar;
