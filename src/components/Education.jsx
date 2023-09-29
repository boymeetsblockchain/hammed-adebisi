import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function Education() {
  return (
    <div className="education my-5" id='education'>
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-4">Educational Background</h1>
      <div className="edu-box flex flex-col items-center md:flex-row space-y-5 gap-8 md:space-y-0">
        <div className="higher shadow-2xl p-4 rounded-md my-3 md:w-1/2">
          <h2 className="text-center font-semibold text-xl md:text-2xl mb-4">Higher Educational Institutions Attended</h2>
          <div className="edu-entry flex space-y-3 justify-between text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> Bayero University Kano, Kano</p>
            <p className="ml-8">2007 – 2012</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> University of Benin, Benin City (MSc)</p>
            <p className="ml-8">2015 – 2017</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> University of Benin, Benin City (PhD)</p>
            <p className="ml-8">2018 - 2021</p>
          </div>
        </div>
        <div className="higher shadow-2xl p-4  my-3 md:w-1/2 rounded-md">
          <h2 className="text-center font-semibold text-xl md:text-2xl mb-4">Academic and Professional Qualifications</h2>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> Bachelor of Physiotherapy</p>
            <p className="ml-8">2012</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> Master of Science in Exercise Physiology</p>
            <p className="ml-8">2018</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> Doctor of Philosophy (PhD) in Exercise Physiology</p>
            <p className="ml-8">2022</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
