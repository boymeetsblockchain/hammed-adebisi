import React from 'react';
import { AiOutlineMail, AiFillFacebook,AiFillLinkedin } from 'react-icons/ai';
import { IoIosPeople } from 'react-icons/io';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="aiadebisi@yahoo.com"
            target='_blank'
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <AiOutlineMail size={32} />
          </a>
          <a
            href="https://www.facebook.com/strongadebisi?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <AiFillFacebook size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/hammed-adebisi-2b2689230"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white cursor-pointer"
          >
            <AiFillLinkedin size={32} />
          </a>
        </div>
        <a className="text-gray-300 mt-2 text-center  md:mt-0 text-sm md:text-xl" href='https://www.facebook.com/profile.php?id=100063724201461&mibextid=ZbWKwL'>
          <IoIosPeople size={24} className="inline-block mr-1" />
          Check out my stroke community & rehab community
        </a>
      </div>
      <div className="text-center text-gray-300   md:text-xl mt-4">
        &copy; {currentYear} Hammed Adebisi
      </div>
    </footer>
  );
}

export default Footer;
