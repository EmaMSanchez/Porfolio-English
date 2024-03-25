"use client"
import { motion } from 'framer-motion';

const Titulo = () => {
    
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, 
        transition: { duration: 0.5 } }
      }
    return (
        <motion.p className="font-extrabold text-5xl text-center w-auto" variants={item} initial="hidden" animate="show">Contact</motion.p>
      
    );
  };

export default Titulo