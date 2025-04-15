'use client'

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-pink-50 z-50">
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-pink-300 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-2 left-2 w-20 h-20 bg-pink-200 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: 0.2,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-4 left-4 w-16 h-16 bg-white rounded-full flex items-center justify-center text-pink-500 font-bold"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12" 
              stroke="#EC4899" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>
      <motion.h2
        className="absolute mt-32 text-2xl font-bold text-pink-500"
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Sweet Tooth KE
      </motion.h2>
    </div>
  );
};

export default Loader;