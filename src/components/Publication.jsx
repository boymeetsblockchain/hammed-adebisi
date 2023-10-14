import React from 'react';
import { files } from './Publicationdata';

function Publication() {
  return (
    <div className="publications my-10 py-5 px-3" id='publications'>
      <h1 className='text-lg md:text-4xl text-center mb-2 font-bold'>Publications</h1>
      <p className='text-justify text-gray-700 mb-8'>Dr. Hammed has accumulated a strong background in several research fields and have developed a strong research foundation that will help to ensure his future success as a scientist. He has played a role in the organization of clinical trials to test the efficacy of many treatment protocols in the hospitals, which has given him more experience interacting with patients in a research environment. Dr. Hammed has published over twenty-seven original scientific articles in peer review journals to provide evidence-based approaches for inpatient and outpatient rehabilitation of stroke, spinal cord injury, and cerebral palsy as well as the promotion of physical activity and prevention of obesity.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-4">
        {files.map((file) => (
          <a    className="antro-1 flex flex-col items-center justify-center text-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100" href={file.path} download=""  >
            <div className="img">
              <img
                src={file.link}
                alt=""
                className="w-full max-w-full h-auto max-h-32 "
              />
            </div>
            <div className="text mt-2">
              <p className="">
                <span className='text-grey-700 text-sm capitalize  font-bold'>{file.name}</span>
              </p>
              <p>
                Author: <span className="text-gray-700 text-sm font-bold">{file.author}({file.date})</span>
              </p>
              
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Publication;
