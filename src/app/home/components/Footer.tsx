import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import FooterImage from '../../../../public/footer.png';

function Footer() {
  return (
    <div>
      <div className='h-30'></div>
    <div className="bg-cover bg-center text-center py-20" style={{ backgroundImage: `url(${FooterImage.src})` }}>
      <h2 className="text-xl font-semibold mb-4 pb-10">Connect with me :</h2>
      <div className="flex justify-center gap-4">
        <a href="https://www.linkedin.com/in/saurabh-n-chaudhari-624725287/" target="_blank" className="flex items-center">
          <FaLinkedin size={32} color='gray' />
         
        </a>
        <a href="https://github.com/Saurabh2244" target="_blank" className="flex items-center ">
          <FaGithub size={32}  color='gray' />
       
        </a>
        <a href="https://www.instagram.com/saurabh2003_official/" target="_blank"className="flex items-center">
          <FaInstagram size={32}  color='gray' />
        </a>
      </div>
    </div>
    </div>
  );
}

export default Footer;
