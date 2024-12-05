import {Github, ExternalLink} from "lucide-react";
import { motion } from "framer-motion";
import {PROJECTS} from "../constants";
import { Heading } from "./Repeating/Heading";

export const Projects = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <Heading heading_text = "Featured Projects" />
      <div className="max-w-6xl mx-auto px-8 flex flex-col gap-8 py-12">
        
        {PROJECTS.map((project,index) => (
          <div key={index} className="flex flex-wrap lg:justify-center mb-10">
            <div className="w-full lg:w-1/3 mx-auto">
                <motion.div initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}}>
                    <img className="rounded mb-6" width={150} height={150} src={project.image} alt={project.title} />
                </motion.div>
            </div>
            <div className="w-full max-w-xl lg:w-2/3">
                <motion.div initial={{x:100,opacity:0}} whileInView={{x:0,opacity:1}} viewport={{ once: true }} transition={{duration:1.5}} className="flex flex-col">
                    <p className="font-bold text-xl mb-2">{project.title}</p>
                    <p className="text-justify text-lg text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap">
                        {project.technologies.map((technology, index) => (
                            <span key={index} className="px-2 py-1 mr-2 mt-2 text-white bg-gray-700 font-medium rounded border border-gray-900 mb-4">{technology}</span>
                        ))}
                    </div>
                    <div className="flex">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center mr-2 mt-2 border-2 px-2 py-1 rounded-lg border-gray-700 text-gray-300 hover:bg-gray-700"><ExternalLink className="h-5 w-5 mr-2" />Demo <span className="ml-1"></span></a>
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center mr-2 mt-2 border-2 px-2 py-1 rounded-lg border-gray-700 text-gray-300 hover:bg-gray-700 "><Github className="h-5 w-5 mr-2" />Github <span className="ml-1"></span></a>
                    </div>
                </motion.div>
            </div>
          </div>




          // <motion.div 
          //   key={index} 
          //   className="w-full md:w-1/2 bg-gray-700 rounded-xl overflow-hidden border border-gray-800"
          //   initial={{opacity:0, y:50}}
          //   whileInView={{opacity:1,y:0}}
          //   viewport={{once:true}}
          //   transition={{delay: index * 0.2}}
          //   >
          //     <img className="w-full h-48 object-top image-center" src={project.image} alt="" />
          //     <div className="flex flex-col items-start p-6 rounded-b-xl">
          //       <p className="font-bold text-xl mb-2">{project.title}</p>
          //       <p className="text-justify text-gray-400 mb-4">{project.description}</p>
          //       <div className="flex flex-wrap">
          //         {project.technologies.map((technology, index) => (
          //             <span key={index} className="px-2 py-1 mr-2 mt-2 text-white text-sm font-medium rounded border border-gray-100 mb-4">{technology}</span>
          //         ))}
          //       </div>
          //       <div className="flex gap-4 text-blue-400">
          //         <a className="flex items-center gap-2" target='_blank' rel="noreferrer" href={project.github}><Github className="h-5 w-5" />Code</a>
          //         <a className="flex items-center gap-2" target='_blank' rel="noreferrer" href={project.demo}><ExternalLink className="h-5 w-5" />Live Demo</a>
          //       </div>
          //     </div>
          // </motion.div>
        ))}
      </div>
    </section>
  )
}
