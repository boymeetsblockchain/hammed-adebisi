import React from 'react';
import Adebisi from '../assets/Adebisi.jpeg';
import{AiOutlineFilePdf} from 'react-icons/ai'
import cv from '../assets/cv.docx'
function Hero() {
  return (
    <div className="hero flex flex-col-reverse md:flex-row w-full gap-2  my-10 items-center">
      <div className="info flex flex-col justify-center md:w-1/2 md:mx-[100px] space-y-3 text-center md:text-left">
        <h1 className='text-3xl md:text-4xl text-neutral-800 font-bold'>
          Hammed I. Adebisi, PhD
        </h1>
        <h2 className='text-2xl  font-semibold'>
          Neurological Physiotherapist, Exercise Physiologist,Public Health Specialist and Clinical Researcher
        </h2>
        <p className='text-gray-700  text-left'>
          Physiotherapy is a health care profession concerned with human function and movement and maximizing physical potential. It is concerned with identifying and maximizing quality of life and movement potential within the spheres of promotion, prevention, treatment/intervention, habilitation and rehabilitation. It uses physical approaches to promote, maintain and restore physical, psychological and social well-being, considering variations in health status.  It is science-based, committed to extending, applying, evaluating and reviewing the evidence that underpins and informs its practice and delivery.  The exercise of clinical judgement and informed interpretation is at its core. Physiotherapy addresses the illnesses or injuries that limit a person's abilities to move and perform functional activities in their daily lives. Physiotherapists use an individual's history and physical examination to arrive at a diagnosis and establish a management plan and, when necessary, incorporate the results of laboratory and imaging studies like X-rays, CT-scan, or MRI findings. Electrodiagnostic testing (e.g., electromyograms and nerve conduction velocity testing) may also be used.

        </p>
        {/* <p className="text-gray-700  text-left">
          Exercise physiology is the physiology of physical exercise. It is one of the allied health professions, and involves the study of the acute responses and chronic adaptations to exercise. Exercise physiologists are the highest qualified exercise professionals and utilize education, lifestyle intervention and specific forms of exercise to rehabilitate and manage acute and chronic injuries and conditions. Exercise physiologists study the effect of exercise on pathology, and the mechanisms by which exercise can reduce or reverse disease progression.

        </p>
        <p className="text-gray-700  text-left">
          A public health specialist is a health professional who researches diseases and illnesses and assists medical professionals and epidemiologists in detecting and preventing infectious diseases. They also discover ways to decrease health threats and promote healthy lifestyles through education and training. Public health specialists focus their careers on promoting healthy lifestyles for the public through research and analysis and also seek to discover ways to decrease health disparities across communities and populations. They also conduct environmental health surveys, provide health education and training.

        </p>
        <p className="text-gray-700   text-left ">
          Clinical research is a branch of healthcare science that determines the safety and effectiveness of medications, devices, diagnostic products and treatment regimens intended for human use. These may be used for prevention, treatment, diagnosis or for relieving symptoms of a disease. A clinical researcher oversees the development and implementation of clinical research projects to assess the safety and effectiveness of various medications, diagnostic products and medical devices
        </p> */}
      <div className='flex md:justify-start justify-center'>
      <a href={cv} download="" className='bg-[#ff7999] font-semibold text-lg text-white py-4 px-4 rounded-md  flex gap-2 mt-4 hover:bg-red-600 transition duration-300'>
          Download Resume <span className="inline"><AiOutlineFilePdf size={32}/></span>
        </a>
      </div>
      </div>
      <div className="image md:w-1/2 flex md:justify-end">
  <img
    src={Adebisi}
    alt="Hammed Adebisi"
    className="h-128 w-128 lg:h-128 lg:w-128 rounded-full"
  />
</div>

    </div>
  );
}

export default Hero;
