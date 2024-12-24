import { useEffect, useState } from "react";
import {motion} from "framer-motion";
import {Menu, X} from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  },[])

  return (
    <motion.nav initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} transition={{transition:0.5}} className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-gray-900/95 backdrop-blur-sm py-4" : "bg-transparent py-6"}`}>
      <div className="text-white max-w-6xl mx-auto px-8 flex justify-between items-center">
        <motion.a whileHover={{scale:1.1}} href='/' className='outline-none logo text-2xl font-bold'>AS</motion.a>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}><Menu size={24} /></button>
        </div>
        <ul className="hidden md:flex space-x-8 items-center">
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='hover:text-blue-400 transition-colors'><a href="#about">About</a></motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='hover:text-blue-400 transition-colors'><a href="#experience">Experience</a></motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='hover:text-blue-400 transition-colors'><a href="#skills">Skills</a></motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='hover:text-blue-400 transition-colors'><a href="#projects">Projects</a></motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='hover:text-blue-400 transition-colors'><a href="#contact">Contact</a></motion.li>
          <motion.li whileHover={{scale:1.1}} whileTap={{scale:0.95}} className='hover:text-blue-400 transition-colors'><a href="https://abhisheksadhwani.hashnode.dev/" target="_blank" rel="noreferrer">Blog</a></motion.li>
          
        </ul>

        {isMenuOpen && 
          <motion.div
            initial={{opacity:0, x:"100%"}}
            animate={{opacity:1,x:0}}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-50 bg-gray-900 md:hidden opacity-20"
            >
              <X onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer fixed right-10 top-5 text-gray-400" />
              <div className="flex flex-col items-center justify-center h-full">
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale:0.95}} className="text-2xl my-4 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} href="#about">About</motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale:0.95}} className="text-2xl my-4 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} href="#experience">Experience</motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale:0.95}} className="text-2xl my-4 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} href="#skills">Skills</motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale:0.95}} className="text-2xl my-4 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} href="#projects">Projects</motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale:0.95}} className="text-2xl my-4 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} href="#contact">Contact</motion.a>
                <motion.a whileHover={{scale: 1.1}} whileTap={{scale:0.95}} className="text-2xl my-4 hover:text-blue-400 transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)} href="https://abhisheksadhwani.hashnode.dev/" target="_blank" rel="noreferrer">Blog</motion.a>
              </div>
          </motion.div>
        }

      </div>
    </motion.nav>
  )
}
