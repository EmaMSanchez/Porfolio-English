"use client"
import { motion } from 'framer-motion';

const TextoEffect = () => {
    
    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, 
        transition: { duration: 0.5 } }
      }
    return (
        <div className="container flex gap-3 justify-center m-5">
        <motion.p className="font-light text-sm w-auto" variants={item} initial="hidden" animate="show">S E L E C T</motion.p>
        <motion.p className="font-light text-sm w-auto" variants={item} initial="hidden" animate="show"> A </motion.p>
        <motion.p className="font-light text-sm w-auto" variants={item} initial="hidden" animate="show">L A N G U A G E</motion.p>
      </div>
    );
  };

export default TextoEffect