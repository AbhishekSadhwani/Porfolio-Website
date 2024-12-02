import React from 'react'
import {Github, Linkedin, Mail, ChevronDown} from "lucide-react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";


export const Hero = () => {
  return (
    <section className='min-h-screen relative flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white'>
      <div className='absolute inset-0 bg-[url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&auto=format&fit=crop&q=80")] bg-cover bg-center opacity-10'></div>
      <div className='max-w-6xl mx-auto px-8 py-32 relative z-10'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <motion.div 
          initial={{opacity:0, x:-50}}
          animate={{opacity:10,x:0}}
          transition={{duration:0.8}}
          className='flex-1 text-center md:text-left'
          >
            <motion.div 
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.2}}
              className='text-blue-400 text-xl mb-4'
              >
                Hello, I'm
            </motion.div>
            <motion.h1
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.3}} 
              className='text-3xl md:text-[40px] font-bold mb-6'
              >
                Abhishek Sadhwani
            </motion.h1>
            <motion.p
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.4}}
              className='text-xl md:text-2xl text-gray-200 mb-8'
              >
              FrontEnd Developer
            </motion.p>
            <motion.div
              initial={{opacity:0,y:-20}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.5}} 
              className='flex justify-center md:justify-start gap-4'
              >
              <a className='p-3 bg-slate-800/50 rounded-full backdrop-blur-sm hover:bg-gray-700 transition-colors' href="https://github.com/AbhishekSadhwani" target='_blank' rel="noreferrer"><Github className='h-6 w-6' /></a>
              <a className='p-3 bg-slate-800/50 rounded-full backdrop-blur-sm hover:bg-gray-700 transition-colors' href="https://www.linkedin.com/in/abhishek-sadhwani/" target='_blank' rel="noreferrer"><Linkedin className='h-6 w-6' /></a>
              <a className='p-3 bg-slate-800/50 rounded-full backdrop-blur-sm hover:bg-gray-700 transition-colors' href="mailto:abhisheksadhwani23@gmail.com" target='_blank' rel="noreferrer"><Mail className='h-6 w-6' /></a>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{opacity:0, x:50}}
            animate={{opacity:10,x:0}}
            transition={{duration:0.8,delay:0.2}} 
            className='flex-1'
            >
            <img className='border-4 border-blue-400/20 w-64 h-64 md:w-96 md:h-96 object-cover mx-auto rounded-full' src={profile} alt="Abhishek Sadhwani" />
          </motion.div>
        </div>
      </div>
      <motion.a 
        animate={{y:[0,10,0]}}
        transition={{
          duration:1.5,
          repeat:Infinity
        }}
        href='#about'
        className="absolute bottom-8"
        >  
          <ChevronDown className='h-8 w-8'/>
      </motion.a>

    </section>
  )
}
