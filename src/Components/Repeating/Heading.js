import { motion } from 'framer-motion';

export const Heading = ({heading_text}) => {
  return (
    <motion.h1
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{duration:0.5}} 
        className='text-3xl text-center md:text-4xl font-bold mb-10'
        >
            {heading_text}
    </motion.h1>
  )
}
