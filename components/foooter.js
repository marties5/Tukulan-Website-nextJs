import Link from 'next/link';
import {GrLinkedin} from "react-icons/gr"
import {GrGithub} from "react-icons/gr"
import {FiTwitter} from "react-icons/fi"
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {
  return (
    <footer className="ring-2 ring-green-600 text-green-600">
    <div className="container flex flex-col p-4 mx-auto md:p-8 lg:flex-row divide-gray-400">
      <ul className="self-center py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
      </ul>
      <div className="flex flex-col justify-center pt-6 ">
        <div className="flex justify-center space-x-4">
          <Link rel="noopener noreferrer" href="#" title="LinkInd" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
         <GrLinkedin/>
          </Link>
          <Link rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
           <GrGithub/>
          </Link>
          <Link rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
            <FiTwitter/>
          </Link>
          <Link rel="noopener noreferrer" href="#" title="WhatsApp" className="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-violet-400 dark:text-gray-900">
           <BsWhatsapp/>
          </Link>
        </div>
      </div>
    </div>
  </footer> 
  );
};

export default Footer;
