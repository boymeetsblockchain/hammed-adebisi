import React from 'react';
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="mailto:youremail@example.com"
            className="text-gray-300 hover:text-white"
          >
            <AiOutlineMail size={32} />
          </a>
          <a
            href="https://www.facebook.com/yourfacebookpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <AiFillFacebook size={32} />
          </a>
        </div>
        <p className="text-gray-300 mt-2 md:mt-0">
          <IoIosPeople size={24} className="inline-block mr-1" />
          Follow us on social media
        </p>
      </div>
      <div className="text-center text-gray-300   md:text-4xl mt-4">
        &copy; {currentYear} Hammed Adebisi
      </div>
    </footer>
  );
}

export default Footer;
