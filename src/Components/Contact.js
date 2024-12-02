import {Mail, Phone, MapPin} from "lucide-react";
import { motion } from "framer-motion";
import {CONTACT} from "../constants";
import { Heading } from "./Repeating/Heading";

export const Contact = () => {
  const {email, address, phoneNo} = CONTACT;

  return (
    <section id="contact" className='bg-gray-800 text-white py-20'>
      <Heading heading_text="Get in Touch"/>
      <div className='max-w-6xl mx-auto py-2 px-8 flex flex-col md:flex-row justify-between gap-12'>
        <motion.div
          initial={{opacity:0,x:-50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:0.2}}
          className='flex-1 flex flex-col'
          >
            <div className="flex items-center gap-4 mb-6">
              <Mail className="text-blue-400"/>
              <div className="flex flex-col">
                <p className="font-medium">Email</p>
                <p className="text-gray-400">{email}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <Phone className="text-blue-400" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-400">{phoneNo}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <MapPin className="text-blue-400" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-400">{address}</p>
              </div>
            </div>
        </motion.div>
        <motion.div
          initial={{opacity:0,x:50}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          transition={{duration:0.5, delay:0.2}}
          className="flex-1"
          >
            <form className="flex flex-col" action="">
              <input className="mb-4 bg-gray-700 text-gray-100 rounded-lg p-3" type="text" name="" id="" placeholder="Your Name" />
              <input className="mb-4 bg-gray-700 text-gray-100 rounded-lg p-3" type="text" name="" id="" placeholder="Your Email" />
              <textarea className="mb-6 h-[120px] bg-gray-700 text-gray-100 rounded-lg p-3" name="" id="" placeholder="Your Message"></textarea>
              <button className="font-medium bg-blue-500 p-3 rounded-lg">Send Message</button>
            </form>
        </motion.div>
      </div>
    </section>
  )
}
