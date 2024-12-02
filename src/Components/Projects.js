import {Github, ExternalLink} from "lucide-react";
import { motion } from "framer-motion";
import {PROJECTS} from "../constants";
import { Heading } from "./Repeating/Heading";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <Heading heading_text = "Featured Projects" />
      <div className="max-w-5xl mx-auto px-8 flex flex-col md:flex-row justify-center gap-8 py-2">
        
        {PROJECTS.map((project,index) => (
          <motion.div 
            key={index} 
            className="w-full md:w-1/2 bg-gray-700 rounded-xl overflow-hidden border border-gray-800"
            initial={{opacity:0, y:50}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{delay: index * 0.2}}
            >
              <img className="w-full h-48 object-top image-center" src={project.image} alt="" />
              <div className="flex flex-col items-start p-6 rounded-b-xl">
                <p className="font-bold text-xl mb-2">{project.title}</p>
                <p className="text-justify text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((technology, index) => (
                      <span key={index} className="px-2 py-1 mr-2 mt-2 text-white text-sm font-medium rounded border border-gray-100 mb-4">{technology}</span>
                  ))}
                </div>
                <div className="flex gap-4 text-blue-400">
                  <a className="flex items-center gap-2" target='_blank' rel="noreferrer" href={project.github}><Github className="h-5 w-5" />Code</a>
                  <a className="flex items-center gap-2" target='_blank' rel="noreferrer" href={project.demo}><ExternalLink className="h-5 w-5" />Live Demo</a>
                </div>
              </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
