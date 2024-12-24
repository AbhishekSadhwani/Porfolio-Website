import { motion } from 'framer-motion';
import { Heading } from './Repeating/Heading';
import { skills } from '../constants';


export const Skills = () => {
    return (
        <section id="skills" className='text-white text-center py-20'>
            <Heading heading_text = "Skills & Technologies" />
            <motion.div className='max-w-6xl mx-auto px-8 flex flex-wrap items-center justify-center gap-4 py-4'>
                {skills.map((skill,index) => (
                    <motion.div 
                        key={index} 
                        className="flex flex-col items-center bg-gray-800 rounded-2xl max-w-32 md:max-w-48 w-full p-4"
                        initial={{opacity:0, y: index % 2 === 0 ? -100 : 100 }}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:true}}
                        transition={{delay: index * 0.2}}
                        >
                            {skill.skillTag}
                            <p className='mt-2 text-gray-300 text-lg'>{skill.title}</p>
                    </motion.div>
                ))}   
            </motion.div>
        </section>
    )
}
