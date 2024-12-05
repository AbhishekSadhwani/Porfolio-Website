import {Briefcase, Calendar} from "lucide-react";
import { motion } from "framer-motion";
import {EXPERIENCES} from "../constants";
import { Heading } from "./Repeating/Heading";

export const Experience = () => {
  return (
    <section id='experience' className='py-20 bg-gray-800 text-white'>
      <Heading heading_text = "Professional Experience" />
      <div className='max-w-6xl mx-auto flex flex-col gap-8 py-2 px-8'>
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            key={index} 
            className='rounded-lg py-6 px-6 bg-gray-700 flex flex-col md:flex-row items-start md:items-center gap-4'
            initial={{opacity:0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            transition={{delay: index * 0.2}}
            >
              <div className='flex-1 flex flex-col'>
                <h1 className='text-blue-400 font-bold text-xl mb-2'>{experience.role}</h1>
                <p className="text-gray-300 flex items-center gap-2 mb-1"><Briefcase className="h-4 w-4" />{experience.company}</p>
                <p className="text-gray-300 flex items-center gap-2"><Calendar className="h-4 w-4"/>{experience.year}</p>
              </div>
              <div className='flex-1'>
                <p className="text-justify md:text-lg text-gray-300">{experience.description}</p>
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
