import { motion } from "framer-motion";
import {ABOUT_TEXT} from "../constants";
import { Heading } from "./Repeating/Heading";

export const About = () => {
  return (
    <section id='about' className='flex flex-col items-center bg-gray-800 text-white py-20'>
        <Heading heading_text = "About"/>
        <motion.p
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          viewport={{once:true}}
          transition={{duration:0.5,delay:0.1}} 
          className='text-justify max-w-2xl mx-auto px-6'
          >
            {ABOUT_TEXT}
        </motion.p>
    </section>
  )
}
