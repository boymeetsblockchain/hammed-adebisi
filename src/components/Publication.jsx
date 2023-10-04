import React from 'react';
import { files } from './Publicationdata';

function Publication() {
  return (
    <div className="publications my-10 py-5 px-3">
      <h1 className='text-4xl text-center mb-4 font-bold'>Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  gap-4">
        {files.map((file) => (
          <a className="antro-1 flex flex-col items-center justify-center text-center p-4 border border-gray-300 rounded-lg hover:bg-gray-100" href={file.path} download="" key={file.name}>
            <div className="img">
              <img
                src={file.link}
                alt=""
                className="w-full max-w-full h-auto max-h-32 "
              />
            </div>
            <div className="text mt-2">
              <p className="">
                publication:{' '}
                <span className='text-grey-700 text-sm  font-bold'>{file.name}</span>
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
