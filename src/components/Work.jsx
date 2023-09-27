import React from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function Work() {
  return (
    <div className="education my-5" id='education'>
      <h1 className="text-center font-bold text-3xl md:text-4xl mb-4">Work Experience</h1>
      <div className="edu-box flex flex-col items-center md:flex-row space-y-5 g md:space-y-0">
        <div className="higher shadow-2xl p-4 rounded-md my-3 md:w-1/2">
          <h2 className="text-center font-semibold text-xl md:text-2xl mb-4 capitalize">Work experience outside university of benin Teaching Hospital</h2>
          <div className="edu-entry flex space-y-4 justify-between text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span>Industrial Training: National Orthopedics Hospital, Dala, Kano State, Nigeri</p>
            <p className=" text-sm">2009-2010</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> NYSC Physiotherapist: Irrua Specialist Teaching Hospital, Irrua, Edo State, Nigeria </p>
            <p className=" text-sm">March 24,2014 – March 23,2015</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span>Physiotherapist: Aweni Hospital, Saki, Oyo State, Nigeria</p>
            <p className=" text-sm">April 14, 2015 – January 12, 2016</p>
          </div>
        </div>
        <div className="higher shadow-2xl p-4  my-3 md:w-1/2 rounded-md">
          <h2 className="text-center font-semibold text-xl md:text-2xl mb-4">Work Experience in University of Benin Teaching Hospital, Edo State, Nigeria</h2>
          <div className="edu-entry flex space-y-4 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span> Intern Physiotherapist – Department of Physiotherapy 	</p>
            <p className=" text-sm">2014-2015</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span>Physiotherapist – Department of Physiotherapy</p>
            <p className=" text-sm">2018-2020</p>
          </div>
          <div className="edu-entry flex space-y-3 justify-between  text-gray-700">
            <p className="flex items-center"><span className="inline text-green-700 mr-2"><AiOutlineCheckCircle /></span>Principal Physiotherpay</p>
            <p className=" text-sm">2021 to date</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
