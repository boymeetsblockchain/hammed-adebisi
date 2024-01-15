import React from 'react';
import Adebisi from '../assets/Adebisi.jpeg';
import{AiOutlineFilePdf} from 'react-icons/ai'
import cv from '../assets/cv.docx'
function Hero() {
  return (
    <div className="hero flex flex-col-reverse md:flex-row w-full gap-2  my-10 items-center">
      <div className="info flex flex-col justify-center md:w-1/2 md:mx-[100px] space-y-3 text-center md:text-left">
        <h1 className='text-2xl  md:text-4xl text-neutral-800 font-bold'>
          Hammed I. Adebisi, PhD
        </h1>
        <h2 className='text-xl  font-semibold'>
          Medical Rehabilitation Specialist, Exercise Physiologist, {' '}Public Health Expert and Clinical Researcher
        </h2>
        <p className="text-gray-700   md:px-0 px-3 leading-6 text-justify">
        Dr. Hammed is a seasoned healthcare professional with a diverse background encompassing medical rehabilitation, exercise physiology, public health, and clinical research. With a passion for optimizing human wellness, his career has been marked by a commitment to improving the
         lives of human through a multifaceted approach. Dr. Hammed has honed his 
         expertise with a solid foundation in the science of human movement through his educational background .He is also a dedicated public health specialist with a profound passion for improving community health. Furthermore,
          Dr. Hammed’s role as a clinical researcher drives innovation and evidence-based practice within the field of medicine. 
        </p>
      
      </div>
      <div className="image md:w-1/2 flex md:justify-end">
  <img
    src={Adebisi}
    alt="Hammed Adebisi"
    className="h-120 w-64 md:h-128 md:w-128 rounded-full"
  />
</div>

    </div>
  );
}

export default Hero;
