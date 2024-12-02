import { FaGitAlt, FaReact } from 'react-icons/fa'
import { IoLogoFirebase, IoLogoJavascript } from 'react-icons/io5'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { motion } from 'framer-motion';
import { Heading } from './Repeating/Heading';


export const Skills = () => {
    return (
        <section id="skills" className='text-white text-center py-20'>
            <Heading heading_text = "Skills & Technologies" />
            <motion.div className='flex flex-wrap items-center justify-center gap-4 py-2 px-8'>
                <motion.div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaReact className="text-7xl text-cyan-400" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <RiNextjsLine className="text-7xl text-neutral-900 dark:text-neutral-200" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <IoLogoFirebase className="text-7xl text-orange-500" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <IoLogoJavascript className="text-7xl text-yellow-500" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <RiTailwindCssFill className="text-7xl text-cyan-500" />
                </motion.div>
                <motion.div className="rounded-2xl border-4 border-neutral-400 p-4">
                    <FaGitAlt className="text-7xl text-orange-500" />
                </motion.div>
            </motion.div>
        </section>
    )
}
