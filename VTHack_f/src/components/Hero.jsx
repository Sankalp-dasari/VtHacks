import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] uppercase font-bold p-2'>
          Explore services provided&nbsp;
          <span
            style={{
              backgroundColor: '#000', 
              color: '#fff', 
              padding: '5px', 
              borderRadius: '4px', 
            }}
          >
            <ReactTyped
              strings={[
                "by students.",
                "for students.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </span>
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Find help, fast.
        </h1>
        <div>
          <p className='md:text-5xl sm:text-4xl text-xl mb-2'>
            Unlock Campus Services at Your Fingertips!
          </p>
        </div>
        <Link to="/Signup">
          <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 px-6 text-black'>
            Get started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
