import React from 'react';
import Adebisi from '../assets/Adebisi.jpeg';

function Hero() {
  return (
    <div className="hero flex flex-col-reverse md:flex-row w-full mx-auto md:px-16 my-10 items-center">
      <div className="info flex flex-col justify-center md:w-1/2 md:mx-[100px] space-y-3 text-center md:text-left">
        <h1 className='text-3xl md:text-4xl text-neutral-800 font-semibold'>
          Hammed Adebisi
        </h1>
        <h2 className='text-2xl md:text-3xl text-gray-600'>
          Medical Rehabilitationist and Clinical Researcher
        </h2>
        <p className='text-gray-700'>
          A Medical Rehabilitationist and Clinical Researcher is a healthcare professional with dual roles. As a Medical Rehabilitationist, they specialize in assessing and treating individuals who have experienced injuries, illnesses, or disabilities that affect their physical function and mobility. They use therapies and interventions to improve patients' quality of life and independence. Simultaneously, as a Clinical Researcher, they conduct scientific studies to enhance the effectiveness of rehabilitation treatments and interventions. They design research projects, collect and analyze data, and contribute to evidence-based practice in the field of medical rehabilitation, benefiting both individual patients and the broader healthcare community.
        </p>
      <div className='flex md:justify-start justify-center'>
      <a href="#7" className='bg-[#ff7999] text-white py-2 px-4 rounded-md inline-block mt-4 hover:bg-red-600 transition duration-300'>
          Download Resume
        </a>
      </div>
      </div>
      <div className="image md:w-1/2 flex justify-center">
  <img
    src={Adebisi}
    alt="Hammed Adebisi"
    className="h-64 w-64 lg:h-128 lg:w-128 rounded-full"
  />
</div>

    </div>
  );
}

export default Hero;
