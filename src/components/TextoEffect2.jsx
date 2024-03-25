"use client"
import { motion } from 'framer-motion';

const TextoEffect2 = () => {
    
    const item = {
        hidden: { opacity: 0 },
        show: {  opacity: 1, 
        transition: { duration: 0.5 } }
      }
    return (
        <div className="text-center items-center justify-center mt-10">
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show">I am looking for future opportunities to contribute to projects that challenge and inspire.</motion.p>
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show">I am excited about the possibility of working with you and taking your ideas to the next level.</motion.p>
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show">Do not hesitate to contact us!</motion.p>
        <motion.p className='text-center w-auto' variants={item} initial="hidden" animate="show">Let's bring your vision to life in the digital  <span></span> world!</motion.p>
      </div>
    );
  };

export default TextoEffect2