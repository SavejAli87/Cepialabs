import React from 'react';
import {RiReactjsLine} from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { animate, motion } from 'framer-motion';
import { SiSpringboot } from "react-icons/si";

const iconVariants = () =>({
  initia: {y: -10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    }
  }
})

const Technologies = () => {
  return (
   <div className='pb-24'>
    <motion.h2
    whileInView={{opacity: 1, y: 0}}
    initial = {{opacity: 0, x: -100}}
    transition={{duration: 1.5}}
    className='my-20 text-center text-4xl'>Technologies</motion.h2>
    <div className='flex flex-wrap items-center justify-center gap-4'>
      <div>
        <RiReactjsLine className='text-7xl text-cyan-400' />
      </div>
      <div className='p-4'>
      <FaHtml5 className='text-orange-400 text-7xl'/>
      </div>
      <div className='p-4'>
      <FaCss3Alt className='text-blue-600 text-7xl'/>
      </div>
      <div className='p-4'>
      <TbBrandJavascript className='text-yellow-500 text-7xl'/>
      </div>
     
      {/* Backend */}

      <div className='p-4'>
      <FaJava className='text-orange-400 text-7xl'/>
      </div>
      <div className='p-4'>
      <SiSpringboot 
      className='text-green-400 text-7xl'/>
      </div>
      <div className='p-4'>
      <SiMysql className='text-cyan-400 text-7xl'/>
      </div>
    </div>
   </div>
  )
}

export default Technologies