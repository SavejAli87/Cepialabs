import React from 'react';
import {FaGithub, FaInstagram, FaLinkedin, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <a href='/' aria-label='Home'>
        <img src={logo} className='mx-2' width={50} height={33}/>
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

        {/* LinkedIn */}
        <a href='https://www.linkedin.com/in/savej-ali-92aba0254/'
        target="_blank"
        rel='noopener noreferrer'
        aria-label='LinkedIn'>
          <FaLinkedin />
        </a>

            {/* GitHub */}
        <a href='https://github.com/SavejAli87'
        target="_blank"
        rel='noopener noreferrer'
        aria-label='GitHub'>
          <FaGithub />
        </a>

           {/* Instagram */}
        <a href='https://www.instagram.com/savej1943/'
        target="_blank"
        rel='noopener noreferrer'
        aria-label='Instagram'>
          <FaInstagram />
        </a>
         {/* twitter */}
        <a href='https://x.com/SavejAli1943'
        target="_blank"
        rel='noopener noreferrer'
        aria-label='LinkedIn'>
         <FaSquareXTwitter /> 
        </a>
      </div>
    </nav>
  )
}

export default Navbar